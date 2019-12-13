import { ShFComponent, $ } from "framework"

class TabsPage extends ShFComponent {
  constructor(config) {
    super(config)
  }

  events() {
    return {
      'click .collapsible': 'onTabClick'
    }
  }

  onTabClick({ target }) {
    const $target = $(target);
    if (!$target.hasClass('collapsible-header')) return;

    const tabs = this.el.findAll('.js-tab');

    tabs.forEach(element => element.removeClass('active'));
    $target.parent().addClass('active');
  }
}

export const tabsPage = new TabsPage({
  selector: 'app-tabs-page',

  template: `
    <h1 class="tab-page-title">Tabs Page</h1>
    <div class="row">
      <div class="col s6 offset-s3">
        <ul class="collapsible popout collapsible-accordion">
          <li class="js-tab">
            <div class="collapsible-header">
              <i class="material-icons">filter_drama</i>First
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li class="js-tab">
            <div class="collapsible-header">
              <i class="material-icons">place</i>Second
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
          <li class="js-tab active">
            <div class="collapsible-header">
              <i class="material-icons">whatshot</i>Third
            </div>
            <div class="collapsible-body">
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,

  styles: `
    .tab-page-title {
      text-align: center;
    }
  `
});
