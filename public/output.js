(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
    }
    if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'output'.");
    }
    root.output = factory(typeof output === 'undefined' ? {} : output, kotlin, this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Unit = Kotlin.kotlin.Unit;
  var br = $module$kotlinx_html_js.kotlinx.html.js.br_jn093m$;
  var img = $module$kotlinx_html_js.kotlinx.html.js.img_6lw7hj$;
  var h1 = $module$kotlinx_html_js.kotlinx.html.js.h1_1esf85$;
  var h2 = $module$kotlinx_html_js.kotlinx.html.js.h2_nirn70$;
  var h4 = $module$kotlinx_html_js.kotlinx.html.js.h4_2crq26$;
  var div = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.js.button_5fpah4$;
  var p = $module$kotlinx_html_js.kotlinx.html.js.p_qwwequ$;
  var a = $module$kotlinx_html_js.kotlinx.html.js.a_5i6vd$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var choice;
  function main$lambda$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      $receiver.text_61zpoe$('\u0E19\u0E49\u0E2D\u0E07\u0E2B\u0E21\u0E35\u0E15\u0E31\u0E27\u0E41\u0E15\u0E01');
      br(this$, void 0, main$lambda$lambda$lambda$lambda$lambda);
      img(this$, 'logo', 'images/app_onemeal.png');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.text_61zpoe$('\u0E01\u0E34\u0E19\u0E21\u0E32\u0E21\u0E48\u0E32\u0E01\u0E31\u0E1A\u0E2D\u0E30\u0E44\u0E23\u0E14\u0E35');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      $receiver.text_61zpoe$('\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E04\u0E38\u0E13\u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E0A\u0E48\u0E27\u0E07\u0E2A\u0E34\u0E49\u0E19\u0E40\u0E14\u0E37\u0E2D\u0E19 \u0E41\u0E15\u0E48\u0E44\u0E21\u0E48\u0E2D\u0E22\u0E32\u0E01\u0E17\u0E32\u0E19\u0E21\u0E32\u0E21\u0E48\u0E32\u0E40\u0E1B\u0E25\u0E48\u0E32\u0E46 \u0E41\u0E15\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E27\u0E48\u0E32\u0E01\u0E34\u0E19\u0E01\u0E31\u0E1A\u0E2D\u0E30\u0E44\u0E23\u0E14\u0E35');
      br(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_0);
      $receiver.text_61zpoe$('\u0E1B\u0E25. \u0E02\u0E33\u0E46\u0E19\u0E30\u0E08\u0E4A\u0E30');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda(this$) {
    return function ($receiver) {
      h1(this$, void 0, main$lambda$lambda$lambda$lambda(this$));
      h2(this$, void 0, main$lambda$lambda$lambda$lambda_0);
      h4(this$, void 0, main$lambda$lambda$lambda$lambda_1(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda$lambda_1(it) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.text_61zpoe$('START');
    set_onClickFunction($receiver, main$lambda$lambda$lambda$lambda$lambda_1);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_3(this$) {
    return function ($receiver) {
      $receiver.text_61zpoe$('\u0E17\u0E32\u0E19\u0E21\u0E32\u0E21\u0E48\u0E32\u0E01\u0E31\u0E1A....');
      br(this$, void 0, main$lambda$lambda$lambda$lambda$lambda_2);
      $receiver.text_61zpoe$('\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E21\u0E19\u0E39');
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_4($receiver) {
    $receiver.text_61zpoe$('\u0E1A\u0E17\u0E04\u0E33\u0E04\u0E33\u0E19\u0E32\u0E22\u0E08\u0E32\u0E01\u0E1E\u0E35\u0E48\u0E2B\u0E21\u0E35\u0E15\u0E31\u0E27\u0E41\u0E15\u0E01\u0E1E\u0E38\u0E07\u0E08\u0E30\u0E41\u0E15\u0E01\u0E15\u0E32\u0E21\u0E41\u0E25\u0E49\u0E27\u0E40\u0E22\u0E49');
    return Unit;
  }
  function main$lambda$lambda$lambda_0(this$) {
    return function ($receiver) {
      button(this$, void 0, void 0, void 0, void 0, main$lambda$lambda$lambda$lambda_2);
      h2(this$, void 0, main$lambda$lambda$lambda$lambda_3(this$));
      p(this$, void 0, main$lambda$lambda$lambda$lambda_4);
      return Unit;
    };
  }
  function main$lambda$lambda(this$) {
    return function ($receiver) {
      div(this$, 'header', main$lambda$lambda$lambda(this$));
      div(this$, 'random', main$lambda$lambda$lambda_0(this$));
      return Unit;
    };
  }
  function main$lambda$lambda$lambda$lambda_5($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      div(this$, 'fa fa-facebook', main$lambda$lambda$lambda$lambda_5);
      return Unit;
    };
  }
  function main$lambda$lambda_0(this$) {
    return function ($receiver) {
      a(this$, 'https://www.facebook.com/beareateverything', void 0, void 0, main$lambda$lambda$lambda_1(this$));
      return Unit;
    };
  }
  function main$lambda($receiver) {
    div($receiver, 'main', main$lambda$lambda($receiver));
    div($receiver, 'shared', main$lambda$lambda_0($receiver));
    return Unit;
  }
  function main(args) {
    var tmp$;
    (tmp$ = document.body) != null ? append(tmp$, main$lambda) : null;
  }
  function Menu(title, cover, description) {
    if (title === void 0)
      title = '';
    if (cover === void 0)
      cover = '';
    if (description === void 0)
      description = '';
    this.title = title;
    this.cover = cover;
    this.description = description;
  }
  Menu.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Menu',
    interfaces: []
  };
  Menu.prototype.component1 = function () {
    return this.title;
  };
  Menu.prototype.component2 = function () {
    return this.cover;
  };
  Menu.prototype.component3 = function () {
    return this.description;
  };
  Menu.prototype.copy_6hosri$ = function (title, cover, description) {
    return new Menu(title === void 0 ? this.title : title, cover === void 0 ? this.cover : cover, description === void 0 ? this.description : description);
  };
  Menu.prototype.toString = function () {
    return 'Menu(title=' + Kotlin.toString(this.title) + (', cover=' + Kotlin.toString(this.cover)) + (', description=' + Kotlin.toString(this.description)) + ')';
  };
  Menu.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.cover) | 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    return result;
  };
  Menu.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.cover, other.cover) && Kotlin.equals(this.description, other.description)))));
  };
  var package$com = _.com || (_.com = {});
  var package$beareateverything = package$com.beareateverything || (package$com.beareateverything = {});
  var package$beareatmama = package$beareateverything.beareatmama || (package$beareateverything.beareatmama = {});
  Object.defineProperty(package$beareatmama, 'choice', {
    get: function () {
      return choice;
    }
  });
  package$beareatmama.main_kand9s$ = main;
  var package$model = package$beareatmama.model || (package$beareatmama.model = {});
  package$model.Menu = Menu;
  choice = listOf([new Menu('\u0E1E\u0E23\u0E34\u0E01\u0E21\u0E30\u0E19\u0E32\u0E27', '', '\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E15\u0E49\u0E2D\u0E07 \u0E1E\u0E35\u0E48\u0E02\u0E2D\u0E41\u0E0B\u0E48\u0E1A\u0E46'), new Menu('\u0E0A\u0E35\u0E2A\u0E2A\u0E2A\u0E2A', '', '\u0E44\u0E1B\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E1A\u0E04\u0E27\u0E32\u0E21\u0E21\u0E31\u0E19 \u0E22\u0E37\u0E14\u0E14 \u0E1F\u0E34\u0E19\u0E2A\u0E38\u0E14\u0E46\u0E40\u0E25\u0E22\u0E43\u0E0A\u0E48\u0E44\u0E2B\u0E21\u0E2E\u0E30'), new Menu('\u0E40\u0E15\u0E47\u0E21\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A\u0E40\u0E08\u0E49\u0E42\u0E2D\u0E27', '', '\u0E19\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E08\u0E30\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E41\u0E19\u0E48\u0E19\u0E41\u0E25\u0E49\u0E27 \u0E22\u0E31\u0E07\u0E41\u0E2A\u0E14\u0E07\u0E04\u0E27\u0E32\u0E21\u0E2E\u0E34\u0E1B\u0E41\u0E1A\u0E1A\u0E0A\u0E34\u0E04\u0E46\u0E43\u0E2B\u0E49\u0E42\u0E25\u0E01\u0E23\u0E39\u0E49\u0E2D\u0E35\u0E01\u0E14\u0E49\u0E27\u0E22'), new Menu('\u0E15\u0E49\u0E21\u0E22\u0E33\u0E2B\u0E21\u0E39\u0E2A\u0E31\u0E1A', '', '\u0E41\u0E0B\u0E48\u0E1A\u0E41\u0E1A\u0E1A\u0E40\u0E1A\u0E2A\u0E34\u0E04 \u0E15\u0E49\u0E2D\u0E07\u0E16\u0E49\u0E27\u0E22\u0E19\u0E35\u0E49\u0E41\u0E2B\u0E25\u0E30'), new Menu('\u0E01\u0E34\u0E21\u0E08\u0E34', '', '\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E2D\u0E2D\u0E1B\u0E1B\u0E49\u0E32 \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E21\u0E19\u0E39\u0E19\u0E35\u0E49\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19'), new Menu('\u0E01\u0E38\u0E49\u0E07\u0E21\u0E31\u0E07\u0E01\u0E23', '', '\u0E2A\u0E32\u0E22\u0E40\u0E1B\u0E22\u0E4C\u0E22\u0E31\u0E07\u0E15\u0E49\u0E2D\u0E07\u0E2B\u0E25\u0E1A \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E08\u0E2D\u0E2A\u0E32\u0E22\u0E01\u0E34\u0E19\u0E41\u0E1A\u0E1A\u0E04\u0E38\u0E13'), new Menu('\u0E44\u0E21\u0E48\u0E21\u0E35', '', '\u0E40\u0E2A\u0E35\u0E22\u0E43\u0E08\u0E14\u0E49\u0E27\u0E22\u0E04\u0E38\u0E13\u0E14\u0E27\u0E07\u0E44\u0E21\u0E48\u0E16\u0E36\u0E07 \u0E2A\u0E30\u0E2A\u0E21\u0E41\u0E15\u0E49\u0E21\u0E1A\u0E38\u0E19\u0E40\u0E22\u0E2D\u0E30\u0E46\u0E19\u0E30'), new Menu('\u0E1C\u0E31\u0E01', '', '\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E32\u0E22\u0E40\u0E2E\u0E25\u0E15\u0E35\u0E49\u0E17\u0E35\u0E48\u0E23\u0E39\u0E49\u0E2A\u0E36\u0E01\u0E1C\u0E34\u0E14\u0E1A\u0E32\u0E1B\u0E01\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E01\u0E34\u0E19\u0E21\u0E32\u0E21\u0E48\u0E32'), new Menu('\u0E17\u0E30\u0E40\u0E25', '', '\u0E2A\u0E32\u0E22\u0E40\u0E1B\u0E22\u0E4C\u0E22\u0E31\u0E07\u0E15\u0E49\u0E2D\u0E07\u0E2B\u0E25\u0E1A \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E08\u0E2D\u0E2A\u0E32\u0E22\u0E01\u0E34\u0E19\u0E41\u0E1A\u0E1A\u0E04\u0E38\u0E13'), new Menu('\u0E44\u0E02\u0E48', '', '\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E04\u0E19\u0E22\u0E32\u0E01'), new Menu('\u0E1B\u0E25\u0E32\u0E01\u0E23\u0E30\u0E1B\u0E4B\u0E2D\u0E07', '', '\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E40\u0E2D\u0E32\u0E40\u0E2A\u0E1A\u0E35\u0E22\u0E07\u0E15\u0E2D\u0E19\u0E19\u0E4D\u0E49\u0E32\u0E17\u0E48\u0E27\u0E21\u0E21\u0E32\u0E01\u0E34\u0E19\u0E0A\u0E31\u0E14\u0E46'), new Menu('\u0E40\u0E15\u0E49\u0E32\u0E2B\u0E39\u0E49\u0E44\u0E02\u0E48', '', '\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E19\u0E07\u0E48\u0E32\u0E22\u0E46'), new Menu('\u0E0A\u0E32\u0E21\u0E40\u0E1B\u0E25\u0E48\u0E32', '', '\u0E2D\u0E49\u0E32\u0E27.... \u0E41\u0E25\u0E49\u0E27\u0E08\u0E30\u0E01\u0E34\u0E19\u0E2D\u0E30\u0E44\u0E23\u0E2B\u0E25\u0E48\u0E30\u0E17\u0E35\u0E19\u0E35\u0E49'), new Menu('\u0E21\u0E32\u0E21\u0E48\u0E32\u0E40\u0E01\u0E32\u0E2B\u0E25\u0E35', '', '\u0E40\u0E1B\u0E47\u0E19\u0E04\u0E19\u0E17\u0E35\u0E48\u0E08\u0E31\u0E14\u0E40\u0E15\u0E47\u0E21\u0E08\u0E31\u0E14\u0E2B\u0E19\u0E31\u0E01\u0E43\u0E19\u0E17\u0E38\u0E01\u0E2A\u0E16\u0E32\u0E19\u0E01\u0E32\u0E23\u0E13\u0E4C')]);
  main([]);
  Kotlin.defineModule('output', _);
  return _;
}));

//# sourceMappingURL=output.js.map
