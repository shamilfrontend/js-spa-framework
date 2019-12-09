import {ShFComponent} from "framework"

class TabsPageComponent extends ShFComponent {
  constructor(config) {
    super(config)
  }

  events() {
    return {
      'click .collapsible': 'onTabClick'
    }
  }

  onTabClick({ target }) {
    if (!target.classList.contains('collapsible-header')) return;

    this._el.querySelectorAll('.js-tab').forEach(tab => tab.classList.remove('active'))
    target.parentNode.classList.add('active')
  }
}

export const tabsPageComponent = new TabsPageComponent({
  selector: 'app-tabs-page',

  template: `
    <h1 style="text-align: center;">Tabs Page</h1>
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
`
});
