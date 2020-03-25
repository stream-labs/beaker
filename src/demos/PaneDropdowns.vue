<template>
  <div>
    <div class="section">
      <h1>Pane Dropdowns</h1>

      <pre><code>import { PaneDropdown } from 'streamlabs-beaker';

components: {
  PaneDropdown
}</code></pre>
    </div>

    <div class="section">
      <h2>With Dropdown Icon</h2>

      <DemoSection title="With Dropdown Icon" :code="demoCode">
        <template #components>
          <PaneDropdown
            :closeOnSelect="false"
            :links="[
              {
                label: 'Pane Dropdown Recursion',
                paneDropdownLinks: [
                  {
                    href: '#',
                    icon: 'icon-check',
                    label: 'Most Installed'
                  },
                  {
                    href: '#',
                    icon: 'icon-delete',
                    label: 'Newly Added'
                  },
                  {
                    href: '#',
                    label: 'Trending'
                  }
                ]
              },
              {
                label: 'Pane Dropdown Recursion 2',
                paneDropdownLinks: [
                  {
                    href: '#',
                    icon: 'icon-check',
                    label: 'Most Installed'
                  },
                  {
                    href: '#',
                    icon: 'icon-delete',
                    label: 'Newly Added'
                  },
                  {
                    href: '#',
                    label: 'Trending'
                  }
                ]
              },
              {
                separator: true
              },
              {
                href: '#',
                icon: 'icon-check',
                label: 'Most Installed'
              },
              {
                href: '#',
                icon: 'icon-delete',
                label: 'Newly Added'
              },
              {
                href: '#',
                label: 'Trending'
              }
            ]"
          >
            <span slot="title">Trending</span>
            <!-- <a href="#">
              <i class="icon-check"></i>Most Installed
            </a>
            <a href="#">
              <i class="icon-delete"></i>Newly Added
            </a>
            <a href="#">Trending</a>-->
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Menu Align</h2>

      <DemoSection title="Menu Align" :code="demoCode">
        <template #components>
          <div class="row">
            <PaneDropdown :menuAlign="'right'" :hoverOption="true">
              <span slot="title">Right Dropdown Menu</span>
              <a href="#">Hey I'm a longer link here</a>
              <a href="#">Let's see how this looks</a>
              <a href="#">I'm in a pane dropdown aligned to the right</a>
            </PaneDropdown>
          </div>

          <div class="row">
            <PaneDropdown :menuAlign="'center'">
              <span slot="title">Center Dropdown Menu</span>
              <a href="#">Hey I'm a longer link here</a>
              <a href="#">Let's see how this looks</a>
              <a href="#">I'm in a pane dropdown aligned to the right</a>
            </PaneDropdown>
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Custom Dropdown</h2>

      <DemoSection title="Custom Dropdown" :code="demoCode">
        <template #components>
          <PaneDropdown :custom="true">
            <span slot="title">Custom Dropdown Menu</span>
            <div>
              hey watsup
              <br />
              <strong>put whatever you want in here</strong>
            </div>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Relative Menu</h2>

      <DemoSection title="Relative Menu" :code="demoCode">
        <template #components>
          <PaneDropdown :relativeMenu="true">
            <span slot="title">Relative Menu</span>
            <a href="#">Hey I'm a longer link here</a>
            <a href="#">Let's see how this looks</a>
            <a href="#">I'm in a pane dropdown aligned to the right</a>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Simple Menu</h2>

      <DemoSection title="Simple Menu" :code="demoCode">
        <template #components>
          <PaneDropdown :relativeMenu="true" :simpleMenu="true">
            <span slot="title">Simple Menu</span>
            <a href="#">Hey I'm a longer link here</a>
            <a href="#">Let's see how this looks</a>
            <a href="#">I'm in a pane dropdown aligned to the right</a>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <table class="docs-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          <tr>
            <td>dropdownIcon</td>
            <td>boolean</td>
            <td>true</td>
            <td>Show or hide dropdown icon.</td>
          </tr>
          <tr>
            <td>menuAlign</td>
            <td>string</td>
            <td>null</td>
            <td>
              Default will align the menu to the left side of the toggle. Use
              <code>right</code> or <code>center</code> to align the dropdown
              menu to the right or center of its toggle.
            </td>
          </tr>
          <tr>
            <td>closeOnSelect</td>
            <td>boolean</td>
            <td>true</td>
            <td>Close the dropdown when a link is clicked.</td>
          </tr>
          <tr>
            <td>autoHeight</td>
            <td>boolean</td>
            <td>false</td>
            <td>No max height</td>
          </tr>
          <tr>
            <td>relativeMenu</td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Change the menu from position absolute to relative so it pushes
              the content below it down.
            </td>
          </tr>
          <tr>
            <td>simpleMenu</td>
            <td>boolean</td>
            <td>false</td>
            <td>Removes menues bg colors, box shadow and paddinga.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DemoSection from "./../components/DemoSection.vue";
import PaneDropdown from "./../components/PaneDropdown.vue";
import PaneDropdownsCode from "!!raw-loader!./PaneDropdowns.vue";

@Component({
  components: {
    DemoSection,
    PaneDropdown
  }
})
export default class Dropdowns extends Vue {
  demoCode = PaneDropdownsCode;
}
</script>
