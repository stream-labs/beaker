<template>
  <div class="pagination__container">
    <vue-paginate-component
      :class="{ 'pagination--bg': nightBg }"
      :page-count="pageCount"
      :click-handler="selectPage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'pagination__page'"
      :page-link-class="'pagination__page-link'"
      :prev-class="'pagination__prev'"
      :prev-link-class="'pagination__prev-link'"
      :next-class="'pagination__next'"
      :next-link-class="'pagination__next-link'"
      :break-view-class="'pagination__break'"
      :break-view-link-class="'pagination__break-link'"
      :active-class="'pagination__active'"
      :disabled-class="'pagination__disabled'"
    ></vue-paginate-component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VuePaginateComponent from "vuejs-paginate";

@Component({
  components: {
    VuePaginateComponent,
  }
})
export default class Pagination extends Vue {
  @Prop()
  nightBg!: boolean;

  @Prop()
  itemsPerPage!: number;

  @Prop()
  totalItemCount!: number;

  get pageCount() {
    let remainder = (this.totalItemCount % this.itemsPerPage > 0) ? 1 : 0;
    return Math.floor(this.totalItemCount / this.itemsPerPage) + remainder;
  }

  selectPage(page: number) {
    this.$emit('page-selected', page);
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.pagination {
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;

  &__container {
    display: inline-block;
  }

  &__page,
  &__prev,
  &__next,
  &__break {
    .radius();
    .transition();

    &-link {
      display: inline-block;
      width: 100%;
      height: 100%;
      .radius();
      padding: 7px 12px;
      text-decoration: none;
      outline: none;
      .transition();

      &:hover {
        color: @dark-2;
        text-decoration: none;
      }
    }
  }

  &__page {
    width: 32px;
    height: 32px;
    margin: 0 4px;
    background-color: @light-2;
  }

  &__break {
    margin: 0 -4px;
    background-color: transparent;

    &-link {
      color: @light-4;

      &:hover {
        color: @light-4;
      }
    }
  }

  &__prev,
  &__next {
    width: 80px;
    height: 40px;

    &-link {
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: 11px 25px;
      .radius();
      background-color: @light-3;
      color: @dark-5;
    }
  }

  &__prev {
    .margin-right(7);
  }

  &__next {
    .margin-left(7);
  }

  &__active {
    background-color: @dark-2;

    .pagination__page-link {
      color: @light-1;
    }
  }

  &__disabled {
    .pagination__prev,
    .pagination__next {
      &-link {
        background-color: @light-3;
        color: @light-4;
        cursor: default;
      }
    }
  }
}

.night {
  .pagination {
    &--bg {
      .padding();
      .radius(2);
      background-color: @dark-3;
    }

    &__page {
      background-color: @dark-4;

      &-link {
        color: @light-1;

        &:hover {
          background-color: lighten(@dark-4, 5%);
        }
      }
    }

    &__break {
      background-color: transparent;

      &-link {
        &:hover {
          background-color: transparent;
        }
      }
    }

    &__prev,
    &__next {
      &-link {
        background-color: @dark-5;
        color: @light-1;
      }
    }

    &__active {
      background-color: @dark-2;

      .pagination__page-link {
        &:hover {
          background-color: @dark-2;
        }
      }
    }

    &__disabled {
      .pagination__prev,
      .pagination__next {
        &-link {
          background-color: @dark-4;
          color: @dark-5;
        }
      }
    }
  }
}
</style>
