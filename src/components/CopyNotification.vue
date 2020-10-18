<template>
  <div>
    <transition-group
      name="fadeX-from-right"
      tag="div"
      class="notifications"
    >
      <div
        v-for="{ id, msg, status } in visibleMessages"
        :key="`msg-${id}`"
        class="notification-msg"
        :class="{ 'notification-msg--error': status === 'error' }"
      >
        {{ msg }}
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, computed, onUnmounted,
} from 'vue';
import { eventBus } from '../plugins/event-bus';

interface INotificationMsg {
  id: number;
  status: string;
  msg: string;
  timerStarted: boolean;
}

export default defineComponent({
  setup() {
    const messages: INotificationMsg[] = [];

    const visibleMessages = computed(() => {
      const msgs = messages.filter((msg, idx) => idx < 5);

      msgs.forEach((msg) => {
        if (!msg.timerStarted) {
          // eslint-disable-next-line no-param-reassign
          msg.timerStarted = true;
          setTimeout(() => {
            const idx = messages.findIndex((message) => msg.id === message.id);
            messages.splice(idx, 1);
          }, 5000);
        }
      });

      return msgs;
    });

    function setCopyMsgId() {
      return Math.ceil(Math.random() * 10000);
    }

    function setCopyMsg(copiedMsg: INotificationMsg) {
      const message = {
        ...copiedMsg,
      };
      messages.push(message);
    }

    function onCopySuccess(e) {
      setCopyMsg({
        id: setCopyMsgId(),
        msg: `Copied "${e.text}" to clipboard`,
        status: 'success',
        timerStarted: false,
      });
    }

    function onCopyError() {
      setCopyMsg({
        id: setCopyMsgId(),
        msg: 'Failed to copy to clipboard',
        status: 'error',
        timerStarted: false,
      });
    }

    eventBus.on('copy-success', onCopySuccess);
    eventBus.on('copy-error', onCopyError);

    onUnmounted(() => {
      eventBus.off('copy-success', onCopySuccess);
      eventBus.off('copy-error', onCopyError);
    });

    return {
      messages,
      visibleMessages,
    };
  },
});
</script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";

.notifications {
  position: absolute;
  top: 24px;
  right: 32px;
  display: flex;
  flex-direction: column;
  min-width: 182px;
}

.notification-msg {
  .margin-bottom();
  padding: 4px 8px;
  .radius();
  font-size: 12px;
  font-weight: 500;
  background-color: @dark-teal;
  color: @white;
  &--error {
    background-color: @dark-red;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
}

.night {
  .notification-msg {
    background-color: @teal;

    &--error {
      background-color: @red;
    }
  }
}
</style>
