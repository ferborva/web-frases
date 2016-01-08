define('ember-modal-dialog/templates/components/modal-dialog', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "revision": "Ember@2.0.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"data-ember-modal-dialog-overlay","");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [
            ["attribute","class",["concat",[["get","overlayClassNamesString",["loc",[null,[3,18],[3,41]]]]," ",["subexpr","if",[["get","translucentOverlay",["loc",[null,[3,49],[3,67]]]],"translucent"],[],["loc",[null,[3,44],[3,83]]]]," ",["get","overlay-class",["loc",[null,[3,86],[3,99]]]]]]],
            ["element","action",["close"],[],["loc",[null,[3,103],[3,121]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@2.0.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 4
                },
                "end": {
                  "line": 16,
                  "column": 4
                }
              },
              "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["content","yield",["loc",[null,[15,6],[15,15]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@2.0.0",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 2
              }
            },
            "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","ember-tether",[],["target",["subexpr","@mut",[["get","_alignmentTargetNormalized",["loc",[null,[7,15],[7,41]]]]],[],[]],"attachment",["subexpr","@mut",[["get","_attachmentNormalized",["loc",[null,[8,19],[8,40]]]]],[],[]],"targetAttachment",["subexpr","@mut",[["get","_targetAttachmentNormalized",["loc",[null,[9,25],[9,52]]]]],[],[]],"targetModifier",["subexpr","@mut",[["get","_targetModifierNormalized",["loc",[null,[10,23],[10,48]]]]],[],[]],"classPrefix",["subexpr","@mut",[["get","tetherClassPrefix",["loc",[null,[11,20],[11,37]]]]],[],[]],"offset",["subexpr","@mut",[["get","offset",["loc",[null,[12,15],[12,21]]]]],[],[]],"targetOffset",["subexpr","@mut",[["get","targetOffset",["loc",[null,[13,21],[13,33]]]]],[],[]],"class",["subexpr","concat",[["subexpr","if",[["get","containerClassNamesString",[]],["subexpr","-normalize-class",["containerClassNamesString",["get","containerClassNamesString",[]]],[],[]]],[],[]]," ",["subexpr","if",[["get","alignmentClass",[]],["subexpr","-normalize-class",["alignmentClass",["get","alignmentClass",[]]],[],[]]],[],[]]," ",["subexpr","if",[["get","renderInPlaceClass",[]],["subexpr","-normalize-class",["renderInPlaceClass",["get","renderInPlaceClass",[]]],[],[]]],[],[]]," ",["subexpr","if",[["get","container-class",[]],["subexpr","-normalize-class",["container-class",["get","container-class",[]]],[],[]]],[],[]]," "],[],[]]],0,null,["loc",[null,[6,4],[16,21]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      var child2 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@2.0.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 18,
                  "column": 4
                },
                "end": {
                  "line": 23,
                  "column": 4
                }
              },
              "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["content","yield",["loc",[null,[22,6],[22,15]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@2.0.0",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 2
              },
              "end": {
                "line": 24,
                "column": 2
              }
            },
            "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [
            ["block","ember-modal-dialog-positioned-container",[],["alignment",["subexpr","@mut",[["get","_alignmentNormalized",["loc",[null,[19,18],[19,38]]]]],[],[]],"alignmentTarget",["subexpr","@mut",[["get","alignmentTarget",["loc",[null,[20,24],[20,39]]]]],[],[]],"class",["subexpr","concat",[["subexpr","if",[["get","containerClassNamesString",[]],["subexpr","-normalize-class",["containerClassNamesString",["get","containerClassNamesString",[]]],[],[]]],[],[]]," ",["subexpr","if",[["get","alignmentClass",[]],["subexpr","-normalize-class",["alignmentClass",["get","alignmentClass",[]]],[],[]]],[],[]]," ",["subexpr","if",[["get","renderInPlaceClass",[]],["subexpr","-normalize-class",["renderInPlaceClass",["get","renderInPlaceClass",[]]],[],[]]],[],[]]," ",["subexpr","if",[["get","container-class",[]],["subexpr","-normalize-class",["container-class",["get","container-class",[]]],[],[]]],[],[]]," "],[],[]]],0,null,["loc",[null,[18,4],[23,48]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.0.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","hasOverlay",["loc",[null,[2,8],[2,18]]]]],[],0,null,["loc",[null,[2,2],[4,9]]]],
          ["block","if",[["get","useEmberTether",["loc",[null,[5,8],[5,22]]]]],[],1,2,["loc",[null,[5,2],[24,9]]]]
        ],
        locals: [],
        templates: [child0, child1, child2]
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.0.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "modules/ember-modal-dialog/templates/components/modal-dialog.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","ember-wormhole",[],["to",["subexpr","@mut",[["get","destinationElementId",["loc",[null,[1,21],[1,41]]]]],[],[]],"renderInPlace",["subexpr","@mut",[["get","renderInPlace",["loc",[null,[1,56],[1,69]]]]],[],[]]],0,null,["loc",[null,[1,0],[25,19]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});