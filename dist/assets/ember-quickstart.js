"use strict";



define('ember-quickstart/adapters/application', ['exports', 'emberfire/adapters/firebase'], function (exports, _emberfireAdaptersFirebase) {
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({});
});
define('ember-quickstart/app', ['exports', 'ember', 'ember-quickstart/resolver', 'ember-load-initializers', 'ember-quickstart/config/environment'], function (exports, _ember, _emberQuickstartResolver, _emberLoadInitializers, _emberQuickstartConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberQuickstartConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberQuickstartConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberQuickstartResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberQuickstartConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ember-quickstart/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _emberBasicDropdownComponentsBasicDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdown['default'];
    }
  });
});
define('ember-quickstart/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _emberBasicDropdownComponentsBasicDropdownContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownContent['default'];
    }
  });
});
define('ember-quickstart/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _emberBasicDropdownComponentsBasicDropdownTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownTrigger['default'];
    }
  });
});
define('ember-quickstart/components/create-reply', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    videoUrl: null,
    actions: {
      uploadDone: function uploadDone(url) {
        this.set('videoUrl', url);
      },
      save: function save() {
        var reply = {
          timestamp: new Date(),
          video: this.get('videoUrl')
        };
        this.get('createReply')(reply);
      },
      cancel: function cancel() {
        this.get('cancelReply')();
      }
    }
  });
});
define('ember-quickstart/components/create-thread', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    title: '',
    link: '',
    videoUrl: null,
    transcript: null,
    actions: {
      uploadDone: function uploadDone(url) {
        this.set('videoUrl', url);
      },
      save: function save() {
        var thread = {
          timestamp: new Date(),
          title: this.get('title'),
          link: this.get('link'),
          video: this.get('videoUrl')
        };
        this.get('createThread')(thread);
      },
      cancel: function cancel() {
        this.get('cancelThread')();
      }
    }
  });
});
define('ember-quickstart/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('ember-quickstart/components/ivy-videojs-player', ['exports', 'ivy-videojs/components/ivy-videojs-player'], function (exports, _ivyVideojsComponentsIvyVideojsPlayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _ivyVideojsComponentsIvyVideojsPlayer['default'];
    }
  });
});
define('ember-quickstart/components/ivy-videojs', ['exports', 'ivy-videojs/components/ivy-videojs'], function (exports, _ivyVideojsComponentsIvyVideojs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _ivyVideojsComponentsIvyVideojs['default'];
    }
  });
});
define('ember-quickstart/components/paper-autocomplete-content', ['exports', 'ember-paper/components/paper-autocomplete-content'], function (exports, _emberPaperComponentsPaperAutocompleteContent) {
  exports['default'] = _emberPaperComponentsPaperAutocompleteContent['default'];
});
define('ember-quickstart/components/paper-autocomplete-dropdown', ['exports', 'ember-paper/components/paper-autocomplete-dropdown'], function (exports, _emberPaperComponentsPaperAutocompleteDropdown) {
  exports['default'] = _emberPaperComponentsPaperAutocompleteDropdown['default'];
});
define('ember-quickstart/components/paper-autocomplete-highlight', ['exports', 'ember-paper/components/paper-autocomplete-highlight'], function (exports, _emberPaperComponentsPaperAutocompleteHighlight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocompleteHighlight['default'];
    }
  });
});
define('ember-quickstart/components/paper-autocomplete-options', ['exports', 'ember-paper/components/paper-autocomplete-options'], function (exports, _emberPaperComponentsPaperAutocompleteOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocompleteOptions['default'];
    }
  });
});
define('ember-quickstart/components/paper-autocomplete-trigger-container', ['exports', 'ember-paper/components/paper-autocomplete-trigger-container'], function (exports, _emberPaperComponentsPaperAutocompleteTriggerContainer) {
  exports['default'] = _emberPaperComponentsPaperAutocompleteTriggerContainer['default'];
});
define('ember-quickstart/components/paper-autocomplete-trigger', ['exports', 'ember-paper/components/paper-autocomplete-trigger'], function (exports, _emberPaperComponentsPaperAutocompleteTrigger) {
  exports['default'] = _emberPaperComponentsPaperAutocompleteTrigger['default'];
});
define('ember-quickstart/components/paper-autocomplete', ['exports', 'ember-paper/components/paper-autocomplete'], function (exports, _emberPaperComponentsPaperAutocomplete) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperAutocomplete['default'];
    }
  });
});
define('ember-quickstart/components/paper-backdrop', ['exports', 'ember-paper/components/paper-backdrop'], function (exports, _emberPaperComponentsPaperBackdrop) {
  exports['default'] = _emberPaperComponentsPaperBackdrop['default'];
});
define('ember-quickstart/components/paper-button', ['exports', 'ember-paper/components/paper-button'], function (exports, _emberPaperComponentsPaperButton) {
  exports['default'] = _emberPaperComponentsPaperButton['default'];
});
define('ember-quickstart/components/paper-card-actions', ['exports', 'ember-paper/components/paper-card-actions'], function (exports, _emberPaperComponentsPaperCardActions) {
  exports['default'] = _emberPaperComponentsPaperCardActions['default'];
});
define('ember-quickstart/components/paper-card-avatar', ['exports', 'ember-paper/components/paper-card-avatar'], function (exports, _emberPaperComponentsPaperCardAvatar) {
  exports['default'] = _emberPaperComponentsPaperCardAvatar['default'];
});
define('ember-quickstart/components/paper-card-content', ['exports', 'ember-paper/components/paper-card-content'], function (exports, _emberPaperComponentsPaperCardContent) {
  exports['default'] = _emberPaperComponentsPaperCardContent['default'];
});
define('ember-quickstart/components/paper-card-header-headline', ['exports', 'ember-paper/components/paper-card-header-headline'], function (exports, _emberPaperComponentsPaperCardHeaderHeadline) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderHeadline['default'];
});
define('ember-quickstart/components/paper-card-header-subhead', ['exports', 'ember-paper/components/paper-card-header-subhead'], function (exports, _emberPaperComponentsPaperCardHeaderSubhead) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderSubhead['default'];
});
define('ember-quickstart/components/paper-card-header-text', ['exports', 'ember-paper/components/paper-card-header-text'], function (exports, _emberPaperComponentsPaperCardHeaderText) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderText['default'];
});
define('ember-quickstart/components/paper-card-header-title', ['exports', 'ember-paper/components/paper-card-header-title'], function (exports, _emberPaperComponentsPaperCardHeaderTitle) {
  exports['default'] = _emberPaperComponentsPaperCardHeaderTitle['default'];
});
define('ember-quickstart/components/paper-card-header', ['exports', 'ember-paper/components/paper-card-header'], function (exports, _emberPaperComponentsPaperCardHeader) {
  exports['default'] = _emberPaperComponentsPaperCardHeader['default'];
});
define('ember-quickstart/components/paper-card-icon-actions', ['exports', 'ember-paper/components/paper-card-icon-actions'], function (exports, _emberPaperComponentsPaperCardIconActions) {
  exports['default'] = _emberPaperComponentsPaperCardIconActions['default'];
});
define('ember-quickstart/components/paper-card-image', ['exports', 'ember-paper/components/paper-card-image'], function (exports, _emberPaperComponentsPaperCardImage) {
  exports['default'] = _emberPaperComponentsPaperCardImage['default'];
});
define('ember-quickstart/components/paper-card-media', ['exports', 'ember-paper/components/paper-card-media'], function (exports, _emberPaperComponentsPaperCardMedia) {
  exports['default'] = _emberPaperComponentsPaperCardMedia['default'];
});
define('ember-quickstart/components/paper-card-title-media', ['exports', 'ember-paper/components/paper-card-title-media'], function (exports, _emberPaperComponentsPaperCardTitleMedia) {
  exports['default'] = _emberPaperComponentsPaperCardTitleMedia['default'];
});
define('ember-quickstart/components/paper-card-title-text', ['exports', 'ember-paper/components/paper-card-title-text'], function (exports, _emberPaperComponentsPaperCardTitleText) {
  exports['default'] = _emberPaperComponentsPaperCardTitleText['default'];
});
define('ember-quickstart/components/paper-card-title', ['exports', 'ember-paper/components/paper-card-title'], function (exports, _emberPaperComponentsPaperCardTitle) {
  exports['default'] = _emberPaperComponentsPaperCardTitle['default'];
});
define('ember-quickstart/components/paper-card', ['exports', 'ember-paper/components/paper-card'], function (exports, _emberPaperComponentsPaperCard) {
  exports['default'] = _emberPaperComponentsPaperCard['default'];
});
define('ember-quickstart/components/paper-checkbox', ['exports', 'ember-paper/components/paper-checkbox'], function (exports, _emberPaperComponentsPaperCheckbox) {
  exports['default'] = _emberPaperComponentsPaperCheckbox['default'];
});
define('ember-quickstart/components/paper-chips', ['exports', 'ember-paper/components/paper-chips'], function (exports, _emberPaperComponentsPaperChips) {
  exports['default'] = _emberPaperComponentsPaperChips['default'];
});
define('ember-quickstart/components/paper-contact-chips', ['exports', 'ember-paper/components/paper-contact-chips'], function (exports, _emberPaperComponentsPaperContactChips) {
  exports['default'] = _emberPaperComponentsPaperContactChips['default'];
});
define('ember-quickstart/components/paper-content', ['exports', 'ember-paper/components/paper-content'], function (exports, _emberPaperComponentsPaperContent) {
  exports['default'] = _emberPaperComponentsPaperContent['default'];
});
define('ember-quickstart/components/paper-dialog-actions', ['exports', 'ember-paper/components/paper-dialog-actions'], function (exports, _emberPaperComponentsPaperDialogActions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogActions['default'];
    }
  });
});
define('ember-quickstart/components/paper-dialog-container', ['exports', 'ember-paper/components/paper-dialog-container'], function (exports, _emberPaperComponentsPaperDialogContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogContainer['default'];
    }
  });
});
define('ember-quickstart/components/paper-dialog-content', ['exports', 'ember-paper/components/paper-dialog-content'], function (exports, _emberPaperComponentsPaperDialogContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogContent['default'];
    }
  });
});
define('ember-quickstart/components/paper-dialog-inner', ['exports', 'ember-paper/components/paper-dialog-inner'], function (exports, _emberPaperComponentsPaperDialogInner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialogInner['default'];
    }
  });
});
define('ember-quickstart/components/paper-dialog', ['exports', 'ember-paper/components/paper-dialog'], function (exports, _emberPaperComponentsPaperDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperDialog['default'];
    }
  });
});
define('ember-quickstart/components/paper-divider', ['exports', 'ember-paper/components/paper-divider'], function (exports, _emberPaperComponentsPaperDivider) {
  exports['default'] = _emberPaperComponentsPaperDivider['default'];
});
define('ember-quickstart/components/paper-form', ['exports', 'ember-paper/components/paper-form'], function (exports, _emberPaperComponentsPaperForm) {
  exports['default'] = _emberPaperComponentsPaperForm['default'];
});
define('ember-quickstart/components/paper-grid-list', ['exports', 'ember-paper/components/paper-grid-list'], function (exports, _emberPaperComponentsPaperGridList) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridList['default'];
    }
  });
});
define('ember-quickstart/components/paper-grid-tile-footer', ['exports', 'ember-paper/components/paper-grid-tile-footer'], function (exports, _emberPaperComponentsPaperGridTileFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridTileFooter['default'];
    }
  });
});
define('ember-quickstart/components/paper-grid-tile', ['exports', 'ember-paper/components/paper-grid-tile'], function (exports, _emberPaperComponentsPaperGridTile) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperGridTile['default'];
    }
  });
});
define('ember-quickstart/components/paper-icon', ['exports', 'ember-paper/components/paper-icon'], function (exports, _emberPaperComponentsPaperIcon) {
  exports['default'] = _emberPaperComponentsPaperIcon['default'];
});
define('ember-quickstart/components/paper-input', ['exports', 'ember-paper/components/paper-input'], function (exports, _emberPaperComponentsPaperInput) {
  exports['default'] = _emberPaperComponentsPaperInput['default'];
});
define('ember-quickstart/components/paper-item', ['exports', 'ember-paper/components/paper-item'], function (exports, _emberPaperComponentsPaperItem) {
  exports['default'] = _emberPaperComponentsPaperItem['default'];
});
define('ember-quickstart/components/paper-list', ['exports', 'ember-paper/components/paper-list'], function (exports, _emberPaperComponentsPaperList) {
  exports['default'] = _emberPaperComponentsPaperList['default'];
});
define('ember-quickstart/components/paper-menu-content-inner', ['exports', 'ember-paper/components/paper-menu-content-inner'], function (exports, _emberPaperComponentsPaperMenuContentInner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContentInner['default'];
    }
  });
});
define('ember-quickstart/components/paper-menu-content', ['exports', 'ember-paper/components/paper-menu-content'], function (exports, _emberPaperComponentsPaperMenuContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuContent['default'];
    }
  });
});
define('ember-quickstart/components/paper-menu-item', ['exports', 'ember-paper/components/paper-menu-item'], function (exports, _emberPaperComponentsPaperMenuItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenuItem['default'];
    }
  });
});
define('ember-quickstart/components/paper-menu', ['exports', 'ember-paper/components/paper-menu'], function (exports, _emberPaperComponentsPaperMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperMenu['default'];
    }
  });
});
define('ember-quickstart/components/paper-optgroup', ['exports', 'ember-paper/components/paper-optgroup'], function (exports, _emberPaperComponentsPaperOptgroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperOptgroup['default'];
    }
  });
});
define('ember-quickstart/components/paper-option', ['exports', 'ember-paper/components/paper-option'], function (exports, _emberPaperComponentsPaperOption) {
  exports['default'] = _emberPaperComponentsPaperOption['default'];
});
define('ember-quickstart/components/paper-progress-circular', ['exports', 'ember-paper/components/paper-progress-circular'], function (exports, _emberPaperComponentsPaperProgressCircular) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperProgressCircular['default'];
    }
  });
});
define('ember-quickstart/components/paper-progress-linear', ['exports', 'ember-paper/components/paper-progress-linear'], function (exports, _emberPaperComponentsPaperProgressLinear) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperProgressLinear['default'];
    }
  });
});
define('ember-quickstart/components/paper-radio-group', ['exports', 'ember-paper/components/paper-radio-group'], function (exports, _emberPaperComponentsPaperRadioGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperRadioGroup['default'];
    }
  });
});
define('ember-quickstart/components/paper-radio-proxiable', ['exports', 'ember-paper/components/paper-radio-proxiable'], function (exports, _emberPaperComponentsPaperRadioProxiable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperRadioProxiable['default'];
    }
  });
});
define('ember-quickstart/components/paper-radio', ['exports', 'ember-paper/components/paper-radio'], function (exports, _emberPaperComponentsPaperRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperRadio['default'];
    }
  });
});
define('ember-quickstart/components/paper-reset-button', ['exports', 'ember-paper/components/paper-reset-button'], function (exports, _emberPaperComponentsPaperResetButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperResetButton['default'];
    }
  });
});
define('ember-quickstart/components/paper-select-content', ['exports', 'ember-paper/components/paper-select-content'], function (exports, _emberPaperComponentsPaperSelectContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectContent['default'];
    }
  });
});
define('ember-quickstart/components/paper-select-header', ['exports', 'ember-paper/components/paper-select-header'], function (exports, _emberPaperComponentsPaperSelectHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectHeader['default'];
    }
  });
});
define('ember-quickstart/components/paper-select-menu-inner', ['exports', 'ember-paper/components/paper-select-menu-inner'], function (exports, _emberPaperComponentsPaperSelectMenuInner) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectMenuInner['default'];
    }
  });
});
define('ember-quickstart/components/paper-select-menu-trigger', ['exports', 'ember-paper/components/paper-select-menu-trigger'], function (exports, _emberPaperComponentsPaperSelectMenuTrigger) {
  exports['default'] = _emberPaperComponentsPaperSelectMenuTrigger['default'];
});
define('ember-quickstart/components/paper-select-menu', ['exports', 'ember-paper/components/paper-select-menu'], function (exports, _emberPaperComponentsPaperSelectMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectMenu['default'];
    }
  });
});
define('ember-quickstart/components/paper-select-options', ['exports', 'ember-paper/components/paper-select-options'], function (exports, _emberPaperComponentsPaperSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectOptions['default'];
    }
  });
});
define('ember-quickstart/components/paper-select-search', ['exports', 'ember-paper/components/paper-select-search'], function (exports, _emberPaperComponentsPaperSelectSearch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectSearch['default'];
    }
  });
});
define('ember-quickstart/components/paper-select-trigger', ['exports', 'ember-paper/components/paper-select-trigger'], function (exports, _emberPaperComponentsPaperSelectTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSelectTrigger['default'];
    }
  });
});
define('ember-quickstart/components/paper-select', ['exports', 'ember-paper/components/paper-select'], function (exports, _emberPaperComponentsPaperSelect) {
  exports['default'] = _emberPaperComponentsPaperSelect['default'];
});
define('ember-quickstart/components/paper-sidenav-container', ['exports', 'ember-paper/components/paper-sidenav-container'], function (exports, _emberPaperComponentsPaperSidenavContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperComponentsPaperSidenavContainer['default'];
    }
  });
});
define('ember-quickstart/components/paper-sidenav-inner', ['exports', 'ember-paper/components/paper-sidenav-inner'], function (exports, _emberPaperComponentsPaperSidenavInner) {
  exports['default'] = _emberPaperComponentsPaperSidenavInner['default'];
});
define('ember-quickstart/components/paper-sidenav-toggle', ['exports', 'ember-paper/components/paper-sidenav-toggle'], function (exports, _emberPaperComponentsPaperSidenavToggle) {
  exports['default'] = _emberPaperComponentsPaperSidenavToggle['default'];
});
define('ember-quickstart/components/paper-sidenav', ['exports', 'ember-paper/components/paper-sidenav'], function (exports, _emberPaperComponentsPaperSidenav) {
  exports['default'] = _emberPaperComponentsPaperSidenav['default'];
});
define('ember-quickstart/components/paper-slider', ['exports', 'ember-paper/components/paper-slider'], function (exports, _emberPaperComponentsPaperSlider) {
  exports['default'] = _emberPaperComponentsPaperSlider['default'];
});
define('ember-quickstart/components/paper-subheader', ['exports', 'ember-paper/components/paper-subheader'], function (exports, _emberPaperComponentsPaperSubheader) {
  exports['default'] = _emberPaperComponentsPaperSubheader['default'];
});
define('ember-quickstart/components/paper-switch', ['exports', 'ember-paper/components/paper-switch'], function (exports, _emberPaperComponentsPaperSwitch) {
  exports['default'] = _emberPaperComponentsPaperSwitch['default'];
});
define('ember-quickstart/components/paper-toolbar-tools', ['exports', 'ember-paper/components/paper-toolbar-tools'], function (exports, _emberPaperComponentsPaperToolbarTools) {
  exports['default'] = _emberPaperComponentsPaperToolbarTools['default'];
});
define('ember-quickstart/components/paper-toolbar', ['exports', 'ember-paper/components/paper-toolbar'], function (exports, _emberPaperComponentsPaperToolbar) {
  exports['default'] = _emberPaperComponentsPaperToolbar['default'];
});
define('ember-quickstart/components/paper-virtual-repeat-scroller', ['exports', 'ember-paper/components/paper-virtual-repeat-scroller'], function (exports, _emberPaperComponentsPaperVirtualRepeatScroller) {
  exports['default'] = _emberPaperComponentsPaperVirtualRepeatScroller['default'];
});
define('ember-quickstart/components/paper-virtual-repeat', ['exports', 'ember-paper/components/paper-virtual-repeat'], function (exports, _emberPaperComponentsPaperVirtualRepeat) {
  exports['default'] = _emberPaperComponentsPaperVirtualRepeat['default'];
});
define('ember-quickstart/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _emberPowerSelectComponentsPowerSelectMultiple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultiple['default'];
    }
  });
});
define('ember-quickstart/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleTrigger['default'];
    }
  });
});
define('ember-quickstart/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _emberPowerSelectComponentsPowerSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelect['default'];
    }
  });
});
define('ember-quickstart/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _emberPowerSelectComponentsPowerSelectBeforeOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectBeforeOptions['default'];
    }
  });
});
define('ember-quickstart/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _emberPowerSelectComponentsPowerSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectOptions['default'];
    }
  });
});
define('ember-quickstart/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _emberPowerSelectComponentsPowerSelectSearchMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectSearchMessage['default'];
    }
  });
});
define('ember-quickstart/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectTrigger['default'];
    }
  });
});
define('ember-quickstart/components/transition-group', ['exports', 'ember-css-transitions/components/transition-group'], function (exports, _emberCssTransitionsComponentsTransitionGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssTransitionsComponentsTransitionGroup['default'];
    }
  });
});
define('ember-quickstart/components/video-upload', ['exports', 'ember'], function (exports, _ember) {
  /* global MediaRecorder  */
  exports['default'] = _ember['default'].Component.extend({
    firebaseUpload: _ember['default'].inject.service(),
    isRecording: false,
    videoHeight: 480,
    videoWidth: 640,
    mediaRecorder: null,
    stream: null,
    index: 1,
    error: '',
    videoBlob: _ember['default'].Object.create({
      "blob": _ember['default'].A([])
    }),
    success: '',
    startRecording: function startRecording(stream) {
      var _this = this;

      this.videoBlob.blob = _ember['default'].A([]);
      var options = { mimeType: 'video/webm;codecs=vp9' };
      if (!MediaRecorder['isTypeSupported'](options.mimeType)) {
        console.log(options.mimeType + ' is not Supported');
        options = { mimeType: 'video/webm;codecs=vp8' };
        if (!MediaRecorder['isTypeSupported'](options.mimeType)) {
          console.log(options.mimeType + ' is not Supported');
          options = { mimeType: 'video/webm' };
          if (!MediaRecorder['isTypeSupported'](options.mimeType)) {
            console.log(options.mimeType + ' is not Supported');
            options = { mimeType: '' };
          }
        }
      }
      var mediaRecorder = null;
      try {
        mediaRecorder = new MediaRecorder(stream, options);
      } catch (e) {
        console.error('Exception while creating MediaRecorder: ' + e);
        this.set('error', e);
        return;
      }
      mediaRecorder.ondataavailable = function (blob) {
        return _this.handleDataAvailable(blob);
      };
      mediaRecorder.start(10); // collect 10ms of data
      this.set('mediaRecorder', mediaRecorder);
      this.set('stream', stream);
    },
    handleSuccess: function handleSuccess(stream) {
      var videosContainer = document.getElementById('videos-container');
      var video = document.createElement('video');
      var videoWidth = this.get('videoWidth');
      var videoHeight = this.get('videoHeight');
      video.controls = false;
      video.muted = true;
      video.width = videoWidth;
      video.height = videoHeight;
      if (window.URL) {
        video.srcObject = stream;
      } else {
        video.src = stream;
      }
      videosContainer.appendChild(video);
      video.play();
      this.set('stream', stream);
    },
    handleDataAvailable: function handleDataAvailable(event) {
      if (event.data && event.data.size > 0) {
        this.videoBlob.blob.push(event.data);
      }
    },
    stop: function stop() {
      if (this.get('stream')) this.get('stream').getTracks().forEach(function (track) {
        return track.stop();
      });
      if (this.get('mediaRecorder').state !== 'inactive') this.get('mediaRecorder').stop();
      var videoContainer = document.getElementById('videos-container');
      while (videoContainer.hasChildNodes()) {
        videoContainer.removeChild(videoContainer.lastChild);
      }
    },
    init: function init() {
      var _this2 = this;

      this._super.apply(this, arguments);
      _ember['default'].run.later(function () {
        navigator['mediaDevices'].getUserMedia({
          audio: true, // record both audio/video in Firefox/Chrome
          video: true
        }).then(function (stream) {
          return _ember['default'].run(function () {
            return _this2.handleSuccess(stream);
          });
        })['catch'](function (e) {
          console.log(e);
          _this2.set('error', e);
        });
      }, 1500);
    },
    actions: {
      start: function start() {
        var _this3 = this;

        this.toggleProperty('isRecording');
        _ember['default'].run(function () {
          return _this3.startRecording(_this3.get('stream'));
        });
      },
      cancel: function cancel() {
        this.stop();
      },
      save: function save() {
        var _this4 = this;

        this.toggleProperty('isRecording');
        this.stop();
        _ember['default'].run(function () {
          var video = new Blob(_this4.videoBlob.blob.toArray(), { type: 'video/webm' });
          _this4.get('firebaseUpload').upload(video, video.type, function (url) {
            return _this4.get('saveVideo')(url);
          });
        });
      }
    }
  });
});
define('ember-quickstart/components/virtual-each', ['exports', 'virtual-each/components/virtual-each/component'], function (exports, _virtualEachComponentsVirtualEachComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _virtualEachComponentsVirtualEachComponent['default'];
    }
  });
});
define('ember-quickstart/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('ember-quickstart/controllers/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    firebaseUpload: _ember['default'].inject.service(),
    creating: false,
    actions: {
      toggleThread: function toggleThread() {
        this.toggleProperty('creating');
      },
      saveThread: function saveThread(thread) {
        this.store.createRecord('thread', thread).save();
        this.toggleProperty('creating');
      },
      ready: function ready(player, component) {
        component.bindPropertyToPlayer(player, 'src');
      },
      loadedMetaData: function loadedMetaData(player, component) {
        var h = player.videoHeight();
        var w = player.videoWidth();
        if (h > 540) {
          var ratio = w / h;
          player.height(540);
          player.width(540 * ratio);
        }
      }
    }
  });
});
define('ember-quickstart/controllers/mosaic/mobile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    showNewVideo: false,
    videoUrl: null,
    order: [],
    sortedModel: _ember['default'].computed.sort('model', function (a, b) {
      if (a.get('order') < b.get('order')) {
        return -1;
      } else if (a.get('order') > b.get('order')) {
        return 1;
      } else {
        return a.get('timestamp') > b.get('timestamp') ? -1 : 1;
      }
    }),
    newestItems: _ember['default'].computed.uniqBy('sortedModel', 'order'),
    actions: {
      uploadDone: function uploadDone(url) {
        this.set('videoUrl', url);
      },
      save: function save() {
        var mobile = {
          timestamp: new Date(),
          video: this.get('videoUrl'),
          order: this.get('order')
        };
        this.get('store').createRecord('mobile', mobile).save();
        this.set('showNewVideo', false);
      },
      newVideo: function newVideo(order) {
        this.set('showNewVideo', true);
        this.set('order', order);
      },
      closeNewVideo: function closeNewVideo() {
        this.set('showNewVideo', false);
      }
    }
  });
});
define('ember-quickstart/controllers/thread', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    replying: false,
    actions: {
      toggleReply: function toggleReply() {
        this.toggleProperty('replying');
      },
      saveReply: function saveReply(rawReply) {
        var thread = this.get('model');
        var reply = this.get('store').createRecord('reply', rawReply);
        thread.get('replies').pushObject(reply);
        thread.save().then(function () {
          reply.save();
        });
        this.toggleProperty('replying');
      },
      back: function back() {
        history.back();
      }
    }
  });
});
define('ember-quickstart/helpers/-paper-underscore', ['exports', 'ember-paper/helpers/underscore'], function (exports, _emberPaperHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberPaperHelpersUnderscore.underscore;
    }
  });
});
define('ember-quickstart/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/helpers/app-version', ['exports', 'ember', 'ember-quickstart/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _emberQuickstartConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _emberQuickstartConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('ember-quickstart/helpers/cancel-all', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.cancelHelper = cancelHelper;

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      _ember['default'].assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _emberConcurrencyHelpers.taskHelperClosure)('cancelAll', args);
  }

  exports['default'] = _ember['default'].Helper.helper(cancelHelper);
});
define('ember-quickstart/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectHelpersEmberPowerSelectIsGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsGroup['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('ember-quickstart/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectHelpersEmberPowerSelectIsSelected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('ember-quickstart/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('ember-quickstart/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('ember-quickstart/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/helpers/perform', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.performHelper = performHelper;

  function performHelper(args, hash) {
    return (0, _emberConcurrencyHelpers.taskHelperClosure)('perform', args, hash);
  }

  exports['default'] = _ember['default'].Helper.helper(performHelper);
});
define('ember-quickstart/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ember-quickstart/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ember-quickstart/helpers/task', ['exports', 'ember'], function (exports, _ember) {
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref);

    var task = _ref2[0];

    var args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports['default'] = _ember['default'].Helper.helper(taskHelper);
});
define('ember-quickstart/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('ember-quickstart/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-quickstart/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberQuickstartConfigEnvironment) {
  var _config$APP = _emberQuickstartConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('ember-quickstart/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-quickstart/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-quickstart/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports, _emberConcurrency) {
  exports['default'] = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('ember-quickstart/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ember-quickstart/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('ember-quickstart/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-quickstart/initializers/paper-wormhole', ['exports', 'ember-paper/initializers/paper-wormhole'], function (exports, _emberPaperInitializersPaperWormhole) {
  exports['default'] = {
    name: 'paper-wormhole',
    initialize: _emberPaperInitializersPaperWormhole['default']
  };
});
define('ember-quickstart/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('ember-quickstart/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('ember-quickstart/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define("ember-quickstart/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ember-quickstart/instance-initializers/error-logger', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize(application) {
    // appInstance.inject('route', 'foo', 'service:foo');
    var container = application.lookup ? application : application.container;
    var store = container.lookup('service:store');
    _ember['default'].onerror = function (error) {
      store.createRecord('error', { msg: error }).save();
      // Ember.get('store').createRecord('error', {msg: error}).save();
      console.error(error);
    };
    _ember['default'].RSVP.on('error', function (error) {
      store.createRecord('error', { msg: error }).save();
      console.error(error);
    });
  }

  exports['default'] = {
    name: 'error-logger',
    initialize: initialize,
    after: 'ember-data'
  };
});
define('ember-quickstart/mixins/transition-mixin', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _emberCssTransitionsMixinsTransitionMixin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCssTransitionsMixinsTransitionMixin['default'];
    }
  });
});
define('ember-quickstart/models/error', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    msg: _emberData['default'].attr('string')
  });
});
define('ember-quickstart/models/mobile', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    timestamp: _emberData['default'].attr('date'),
    order: _emberData['default'].attr('number'),
    video: _emberData['default'].attr('string')
  });
});
define('ember-quickstart/models/reply', ['exports', 'ember-data'], function (exports, _emberData) {

  var path = "replies/";

  exports['default'] = _emberData['default'].Model.extend({
    timestamp: _emberData['default'].attr('date'),
    thread: _emberData['default'].belongsTo('thread'),
    video: _emberData['default'].attr('string')
  });
});
define('ember-quickstart/models/thread', ['exports', 'ember-data'], function (exports, _emberData) {

  var path = "threads/";

  exports['default'] = _emberData['default'].Model.extend({
    timestamp: _emberData['default'].attr('date'),
    title: _emberData['default'].attr('string'),
    link: _emberData['default'].attr('string'),
    video: _emberData['default'].attr('string'),
    replies: _emberData['default'].hasMany('reply')
  });
});
define('ember-quickstart/models/video', ['exports', 'ember-data'], function (exports, _emberData) {

  var path = 'videos/';

  exports['default'] = _emberData['default'].Model.extend({
    url: _emberData['default'].attr('string'),
    metadata: _emberData['default'].attr('string'),
    transcript: _emberData['default'].attr('string')
  });
});
define('ember-quickstart/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ember-quickstart/router', ['exports', 'ember', 'ember-quickstart/config/environment'], function (exports, _ember, _emberQuickstartConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberQuickstartConfigEnvironment['default'].locationType,
    rootURL: _emberQuickstartConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('login');
    this.route('contact');
    this.route('thread', { path: '/thread/:thread_id' });
    this.route('mosaic', function () {
      this.route('mobile');
    });
  });

  exports['default'] = Router;
});
define('ember-quickstart/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-quickstart/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('thread', { include: 'replies' }).forEach(function (thread) {
        return thread.video = { src: thread.video, type: 'video/mp4' };
      });
    }
  });
});
define('ember-quickstart/routes/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-quickstart/routes/mosaic', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-quickstart/routes/mosaic/large', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('ember-quickstart/routes/mosaic/mobile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('mobile');
    }
  });
});
define('ember-quickstart/routes/thread', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('thread', params.thread_id, { include: 'replies' });
    }
  });
});
define('ember-quickstart/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ember-quickstart/services/constants', ['exports', 'ember'], function (exports, _ember) {
  var Service = _ember['default'].Service;
  var inject = _ember['default'].inject;
  var computed = _ember['default'].computed;
  var EObject = _ember['default'].Object;
  exports['default'] = Service.extend({

    sniffer: inject.service('sniffer'),

    webkit: computed(function () {
      return (/webkit/i.test(this.get('sniffer.vendorPrefix'))
      );
    }),

    vendorProperty: function vendorProperty(name) {
      var prefix = this.get('sniffer.vendorPrefix').toLowerCase();
      return this.get('webkit') ? '-webkit-' + name.charAt(0) + name.substring(1) : name;
    },

    CSS: computed('webkit', function () {
      var webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: 'transitionend' + (webkit ? ' webkitTransitionEnd' : ''),
        ANIMATIONEND: 'animationend' + (webkit ? ' webkitAnimationEnd' : ''),

        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),

    KEYCODE: EObject.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),

    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },

    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });
});
define('ember-quickstart/services/firebase-app', ['exports', 'emberfire/services/firebase-app'], function (exports, _emberfireServicesFirebaseApp) {
  exports['default'] = _emberfireServicesFirebaseApp['default'];
});
define('ember-quickstart/services/firebase-upload', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    firebaseApp: _ember['default'].inject.service(),
    uploading: false,
    storageRef: null,
    uploadPath: null,
    progress: 0,
    init: function init() {
      this.set('storageRef', this.get('firebaseApp').storage().ref());
      this.newVideo();
    },
    newVideo: function newVideo() {
      this.set('uploadPath', this.get('storageRef').child('videos/' + Math.random().toString(36).substring(7) + '.webm'));
    },
    upload: function upload(raw, metadata, finished) {
      var _this = this;

      this.set('uploading', true);
      var uploadTask = this.get('uploadPath').put(raw, { contentType: metadata });
      uploadTask.on('state_changed', function (snapshot) {
        return _ember['default'].run(function () {
          _this.set('progress', snapshot.bytesTransferred / snapshot.totalBytes * 100);
        });
      }, function (error) {
        throw error;
      }, function () {
        finished(uploadTask.snapshot.downloadURL);
        _this.set('uploading', false);
      });
      this.newVideo();
    }
  });
});
define('ember-quickstart/services/firebase', ['exports', 'emberfire/services/firebase'], function (exports, _emberfireServicesFirebase) {
  exports['default'] = _emberfireServicesFirebase['default'];
});
define('ember-quickstart/services/paper-sidenav', ['exports', 'ember-paper/services/paper-sidenav'], function (exports, _emberPaperServicesPaperSidenav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperServicesPaperSidenav['default'];
    }
  });
});
define('ember-quickstart/services/sniffer', ['exports', 'ember'], function (exports, _ember) {
  var Service = _ember['default'].Service;
  var computed = _ember['default'].computed;

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var lowercase = function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  var toInt = function toInt(str) {
    return parseInt(str, 10);
  };

  exports['default'] = Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,

    android: computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init: function init() {
      this._super.apply(this, arguments);
      if (typeof FastBoot !== 'undefined') {
        return;
      }

      var _document = document;
      var _window = window;

      this.setProperties({
        _document: _document,
        _window: _window
      });

      var bodyStyle = _document.body && _document.body.style;
      var vendorPrefix = undefined;
      var vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

      var transitions = false;
      var animations = false;
      var match = undefined;

      if (bodyStyle) {
        for (var prop in bodyStyle) {
          if (match = vendorRegex.exec(prop)) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || vendorPrefix + 'Transition' in bodyStyle);
        animations = !!('animation' in bodyStyle || vendorPrefix + 'Animation' in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);

      this.set('vendorPrefix', vendorPrefix);
    }

  });
});
/* globals FastBoot */
define('ember-quickstart/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _emberTextMeasurerServicesTextMeasurer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTextMeasurerServicesTextMeasurer['default'];
    }
  });
});
define('ember-quickstart/services/util', ['exports', 'ember'], function (exports, _ember) {
  var Service = _ember['default'].Service;
  var $ = _ember['default'].$;

  var Util = Service.extend({

    // Disables scroll around the passed element.
    disableScrollAround: function disableScrollAround(element) {
      var util = this;
      var $document = $(window.document);

      util.disableScrollAround._count = util.disableScrollAround._count || 0;
      ++util.disableScrollAround._count;
      if (util.disableScrollAround._enableScrolling) {
        return util.disableScrollAround._enableScrolling;
      }

      var _$document$get = $document.get(0);

      var body = _$document$get.body;

      var restoreBody = disableBodyScroll();
      var restoreElement = disableElementScroll();

      return util.disableScrollAround._enableScrolling = function () {
        if (! --util.disableScrollAround._count) {
          restoreBody();
          restoreElement();
          delete util.disableScrollAround._enableScrolling;
        }
      };

      // Creates a virtual scrolling mask to absorb touchmove, keyboard, scrollbar clicking, and wheel events
      function disableElementScroll() {
        var zIndex = 50;
        var scrollMask = $('<div class="md-scroll-mask" style="z-index: ' + zIndex + '">\n          <div class="md-scroll-mask-bar"></div>\n        </div>');
        body.appendChild(scrollMask[0]);

        scrollMask.on('wheel', preventDefault);
        scrollMask.on('touchmove', preventDefault);
        $document.on('keydown', disableKeyNav);

        return function restoreScroll() {
          scrollMask.off('wheel');
          scrollMask.off('touchmove');
          scrollMask[0].parentNode.removeChild(scrollMask[0]);
          $document.off('keydown', disableKeyNav);
          delete util.disableScrollAround._enableScrolling;
        };

        // Prevent keypresses from elements inside the body
        // used to stop the keypresses that could cause the page to scroll
        // (arrow keys, spacebar, tab, etc).
        function disableKeyNav(e) {
          // -- temporarily removed this logic, will possibly re-add at a later date
          return;
          if (!element[0].contains(e.target)) {
            e.preventDefault();
            e.stopImmediatePropagation();
          }
        }

        function preventDefault(e) {
          e.preventDefault();
        }
      }

      // Converts the body to a position fixed block and translate it to the proper scroll
      // position
      function disableBodyScroll() {
        var htmlNode = body.parentNode;
        var restoreHtmlStyle = htmlNode.getAttribute('style') || '';
        var restoreBodyStyle = body.getAttribute('style') || '';
        var scrollOffset = body.scrollTop + body.parentElement.scrollTop;
        var clientWidth = body.clientWidth;

        if (body.scrollHeight > body.clientHeight) {
          applyStyles(body, {
            position: 'fixed',
            width: '100%',
            top: -scrollOffset + 'px'
          });

          applyStyles(htmlNode, {
            overflowY: 'scroll'
          });
        }

        if (body.clientWidth < clientWidth) {
          applyStyles(body, { overflow: 'hidden' });
        }

        return function restoreScroll() {
          body.setAttribute('style', restoreBodyStyle);
          htmlNode.setAttribute('style', restoreHtmlStyle);
          body.scrollTop = scrollOffset;
        };
      }

      function applyStyles(el, styles) {
        for (var key in styles) {
          el.style[key] = styles[key];
        }
      }
    },
    enableScrolling: function enableScrolling() {
      var method = this.disableScrollAround._enableScrolling;
      method && method();
    },

    /*
     * supplant() method from Crockford's `Remedial Javascript`
     * Equivalent to use of $interpolate; without dependency on
     * interpolation symbols and scope. Note: the '{<token>}' can
     * be property names, property chains, or array indices.
     */
    supplant: function supplant(template, values, pattern) {
      pattern = pattern || /\{([^\{\}]*)\}/g;
      return template.replace(pattern, function (a, b) {
        var p = b.split('.');
        var r = values;
        try {
          for (var s in p) {
            if (p.hasOwnProperty(s)) {
              r = r[p[s]];
            }
          }
        } catch (e) {
          r = a;
        }
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      });
    },
    nextTick: (function (window, prefixes, i, p, fnc) {
      while (!fnc && i < prefixes.length) {
        fnc = window[prefixes[i++] + 'equestAnimationFrame'];
      }
      return fnc && fnc.bind(window) || window.setImmediate || function (fnc) {
        window.setTimeout(fnc, 0);
      };
    })(window, 'r webkitR mozR msR oR'.split(' '), 0)

  });

  exports['default'] = Util;
});
define("ember-quickstart/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mpo2oJ5W", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"body\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/application.hbs" } });
});
define("ember-quickstart/templates/components/create-reply", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "GT6ITxA0", "block": "{\"statements\":[[\"block\",[\"paper-form\"],null,[[\"onSubmit\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"save\"],null]]],5]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Cancel reply Create\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Upload a video to Submit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"block\",[\"paper-button\"],null,[[\"disabled\"],[true]],1],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Submit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"layout-row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"block\",[\"form\",\"submit-button\"],null,[[\"raised\",\"primary\"],[true,true]],3],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"layout-row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"layout-column flex-50\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"video-upload\"],null,[[\"saveVideo\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"uploadDone\"],null]]]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"videoUrl\"]]],null,4,2],[\"text\",\"  \"],[\"block\",[\"paper-button\"],[[\"get\",[\"warn\"]]],[[\"onClick\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"cancel\"],null]]],0],[\"text\",\"\\n\"]],\"locals\":[\"form\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/create-reply.hbs" } });
});
define("ember-quickstart/templates/components/create-thread", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iR6wUBuq", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"create-thread\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"paper-form\"],null,[[\"onSubmit\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"save\"],null]]],5],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Cancel thread Create\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Upload a video to Submit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"block\",[\"paper-button\"],null,[[\"disabled\"],[true]],1],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Submit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"layout-row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"form\",\"submit-button\"],null,[[\"raised\",\"primary\"],[true,true]],3],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"layout-row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"layout-column flex-50\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"form\",\"input\"],null,[[\"label\",\"value\",\"onChange\",\"required\"],[\"Title\",[\"get\",[\"title\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"title\"]]],null]],null],true]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"form\",\"input\"],null,[[\"label\",\"value\",\"onChange\"],[\"Link\",[\"get\",[\"link\"]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"mut\"],[[\"get\",[\"link\"]]],null]],null]]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"video-upload\"],null,[[\"saveVideo\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"uploadDone\"],null]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"videoUrl\"]]],null,4,2],[\"text\",\"    \"],[\"block\",[\"paper-button\"],[[\"get\",[\"warn\"]]],[[\"onClick\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"cancel\"],null]]],0],[\"text\",\"\\n\"]],\"locals\":[\"form\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/create-thread.hbs" } });
});
define("ember-quickstart/templates/components/transition-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "kX8g9Ztu", "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/transition-group.hbs" } });
});
define("ember-quickstart/templates/components/video-upload", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "EH+a4J1E", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"videos-container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isRecording\"]]],null,6,3],[\"block\",[\"if\"],[[\"get\",[\"firebaseUpload\",\"uploading\"]]],null,1],[\"block\",[\"if\"],[[\"get\",[\"error\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"p\",[]],[\"static-attr\",\"id\",\"error\"],[\"flush-element\"],[\"text\",\"Error: \"],[\"append\",[\"unknown\",[\"error\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"append\",[\"helper\",[\"paper-progress-linear\"],null,[[\"value\"],[[\"get\",[\"firebaseUpload\",\"progress\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\" start recording\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"block\",[\"paper-button\"],[[\"get\",[\"primary\"]]],[[\"onClick\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"start\"],null]]],2],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\" save\"]],\"locals\":[]},{\"statements\":[[\"text\",\" cancel\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"block\",[\"paper-button\"],[[\"get\",[\"warn\"]]],[[\"onClick\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"cancel\"],null]]],5],[\"text\",\"\\n  \"],[\"block\",[\"paper-button\"],[[\"get\",[\"primary\"]]],[[\"onClick\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"save\"],null]]],4],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/components/video-upload.hbs" } });
});
define("ember-quickstart/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mzUJVBlo", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/contact.hbs" } });
});
define("ember-quickstart/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hH+MrzUY", "block": "{\"statements\":[[\"block\",[\"paper-toolbar\"],null,null,12],[\"block\",[\"if\"],[[\"get\",[\"creating\"]]],null,7],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"feed\"],[\"static-attr\",\"class\",\"feed\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,6],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feed_reply\"],[\"flush-element\"],[\"text\",\"\\n            No replies yet. Open the thread to reply.\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feed__reply\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"ivy-videojs\"],null,[[\"fluid\",\"controls\",\"src\"],[true,true,[\"get\",[\"reply\",\"video\"]]]]],false],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"reply\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"thread\",\"replies\"]]],null,1]],\"locals\":[]},{\"statements\":[[\"text\",\"          Open Thread\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"paper-button\"],null,[[\"raised\",\"primary\"],[true,true]],3]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"thread\",\"link\"]],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"thread\",\"link\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feed__item\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"thread\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"thread\",\"link\"]]],null,5],[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feed__video\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"ivy-videojs\"],null,[[\"controls\",\"ready\",\"loadedmetadata\",\"src\"],[true,\"ready\",\"loadedMetaData\",[\"get\",[\"thread\",\"video\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"thread\",[\"get\",[\"thread\"]]],null,4],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feed__replies\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"thread\",\"replies\"]]],null,2,0],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"thread\"]},{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"create-thread\"],null,[[\"createThread\",\"cancelThread\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"saveThread\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleThread\"],null]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        Create a Thread\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"paper-button\"],null,[[\"onClick\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleThread\"],null]]],8]],\"locals\":[]},{\"statements\":[],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Social Video\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"creating\"]]],null,10,9],[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"flex\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"toolbar\",\"tools\"],null,null,11]],\"locals\":[\"toolbar\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/index.hbs" } });
});
define("ember-quickstart/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "yWOsjFI4", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Login Form Goes here\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"button\"]],0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  Back to main page\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/login.hbs" } });
});
define("ember-quickstart/templates/mosaic", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "c/FNko2m", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"mosaic__container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/mosaic.hbs" } });
});
define("ember-quickstart/templates/mosaic/large", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "svoXDemy", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/mosaic/large.hbs" } });
});
define("ember-quickstart/templates/mosaic/mobile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RZQqQg7+", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"newestItems\"]]],null,8],[\"append\",[\"unknown\",[\"model\",\"length\"]],false],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"sortedModel\",\"length\"]],false],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showNewVideo\"]]],null,5]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Cancel\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Submit\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"flex\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"block\",[\"paper-button\"],null,[[\"raised\",\"primary\",\"onClick\"],[true,true,[\"helper\",[\"action\"],[[\"get\",[null]],\"save\"],null]]],1],[\"text\",\"\\n      \"],[\"block\",[\"paper-button\"],[[\"get\",[\"warn\"]]],[[\"onClick\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"closeNewVideo\"],null]]],0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"video-upload\"],null,[[\"saveVideo\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"uploadDone\"],null]]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"paper-dialog-content\"],null,null,3],[\"text\",\"\\n\"],[\"block\",[\"paper-dialog-actions\"],null,[[\"class\"],[\"layout-row\"]],2],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"paper-dialog\"],null,[[\"fullscreen\",\"onClose\",\"origin\"],[[\"get\",[\"fullscreen\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"closeNewVideo\",\"cancel\"],null],[\"get\",[\"dialogOrigin\"]]]],4]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"feed__video\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"ivy-videojs\"],null,[[\"fluid\",\"controls\",\"src\"],[true,true,[\"get\",[\"item\",\"video\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      Replace \"],[\"append\",[\"unknown\",[\"item\",\"order\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"mobile__container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"paper-button\"],null,[[\"raised\",\"primary\",\"onClick\"],[true,true,[\"helper\",[\"action\"],[[\"get\",[null]],\"newVideo\",[\"get\",[\"item\",\"order\"]]],null]]],7],[\"block\",[\"if\"],[[\"get\",[\"item\",\"video\"]]],null,6],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"item\"]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/mosaic/mobile.hbs" } });
});
define("ember-quickstart/templates/thread", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "xt0j0lIi", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-12 thread__header\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"block\",[\"paper-button\"],null,[[\"raised\",\"warn\",\"onClick\"],[true,true,[\"helper\",[\"action\"],[[\"get\",[null]],\"back\"],null]]],8],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"replying\"]]],null,7,6],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"replying\"]]],null,4,3],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"reply\",\"link\"]],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"reply\",\"link\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"thread__reply\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"reply\",\"link\"]]],null,0],[\"text\",\"        \"],[\"append\",[\"helper\",[\"ivy-videojs\"],null,[[\"controls\",\"src\"],[true,[\"get\",[\"reply\",\"video\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"reply\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"thread__link\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"unknown\",[\"model\",\"link\"]],null],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"link\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"thread__video\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"thread__title\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"link\"]]],null,2],[\"text\",\"    \"],[\"append\",[\"helper\",[\"ivy-videojs\"],null,[[\"controls\",\"src\"],[true,[\"get\",[\"model\",\"video\"]]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"thread__feed\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"replies\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"create-reply\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"create-reply\"],null,[[\"createReply\",\"cancelReply\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"saveReply\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleReply\"],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"thread__video\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Reply\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"block\",[\"paper-button\"],null,[[\"raised\",\"primary\",\"onClick\"],[true,true,[\"helper\",[\"action\"],[[\"get\",[null]],\"toggleReply\"],null]]],5],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[],\"locals\":[]},{\"statements\":[[\"text\",\"Go Back\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "ember-quickstart/templates/thread.hbs" } });
});
define('ember-quickstart/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
define('ember-quickstart/utils/clamp', ['exports', 'ember-paper/utils/clamp'], function (exports, _emberPaperUtilsClamp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPaperUtilsClamp['default'];
    }
  });
});


define('ember-quickstart/config/environment', ['ember'], function(Ember) {
  var prefix = 'ember-quickstart';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-quickstart/app")["default"].create({"name":"ember-quickstart","version":"0.0.0+ebfedc45"});
}
//# sourceMappingURL=ember-quickstart.map
