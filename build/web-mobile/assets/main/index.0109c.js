System.register("chunks:///_virtual/Setting.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UserManager.ts', './AudioCtrl.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Toggle, Slider, Layout, Widget, director, Component, UserManager, AudioCtrl;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Toggle = module.Toggle;
      Slider = module.Slider;
      Layout = module.Layout;
      Widget = module.Widget;
      director = module.director;
      Component = module.Component;
    }, function (module) {
      UserManager = module.default;
    }, function (module) {
      AudioCtrl = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "008d9PrPqpIhaDsOHyFgyyV", "Setting", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Setting = exports('default', (_dec = ccclass('Setting'), _dec2 = property({
        tooltip: '静音和跳过剧情的按钮',
        type: [Toggle]
      }), _dec3 = property({
        tooltip: '音量音效滑动条',
        type: [Slider]
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Setting, _Component);

        function Setting() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "toggles", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "sliders", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "skipNode", null);

          _defineProperty(_assertThisInitialized(_this), "userSettings", null);

          return _this;
        }

        var _proto = Setting.prototype; // LIFE-CYCLE CALLBACKS:

        _proto.onLoad = function onLoad() {};

        _proto.onSetting = function onSetting() {
          // 立刻执行布局和对齐，因为要暂停了，不给你机会
          this.node.children[1].getComponent(Layout).updateLayout();
          this.node.children.forEach(function (node) {
            var widget = node.getComponent(Widget);
            if (widget) widget.updateAlignment();
          });
          this.userSettings = UserManager.getUserSettings();
          this.toggles[0].isChecked = this.userSettings.mute;
          this.toggles[1].isChecked = this.userSettings.skip;
          this.sliders[0].progress = this.userSettings.musicVolume;
          this.sliders[1].progress = this.userSettings.soundVolume;
          director.pause();
        };

        _proto.setMute = function setMute() {
          UserManager.getUserSettings().mute = this.toggles[0].isChecked;
          AudioCtrl.adjustMusicVolume();
        };

        _proto.setSkip = function setSkip() {
          UserManager.getUserSettings().skip = this.toggles[1].isChecked;
        };

        _proto.setMusicVolume = function setMusicVolume() {
          UserManager.getUserSettings().musicVolume = this.sliders[0].progress;
          AudioCtrl.adjustMusicVolume();
        };

        _proto.setSoundVolume = function setSoundVolume() {
          UserManager.getUserSettings().soundVolume = this.sliders[1].progress; //AudioCtrl.adjustSoundVolume()
        };

        _proto.back = function back() {
          director.resume();
          UserManager.saveData();
          this.node.active = false;
        } // update (dt) {}
        ;

        return Setting;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggles", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sliders", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TinyItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UiItem.ts', './DivBlock.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Widget, UiItem, DivBlock;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Widget = module.Widget;
    }, function (module) {
      UiItem = module.UiItem;
    }, function (module) {
      DivBlock = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "050e8MfAYJIY7F1LGwZGe5Y", "TinyItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TinyItem = exports('TinyItem', (_dec = ccclass('TinyItem'), _dec(_class = /*#__PURE__*/function (_UiItem) {
        _inheritsLoose(TinyItem, _UiItem);

        function TinyItem() {
          return _UiItem.apply(this, arguments) || this;
        }

        var _proto = TinyItem.prototype;

        _proto.setValue = function setValue(icon, value) {
          // const widget = this.getComponent(Widget)
          // if (widget) widget.updateAlignment()
          var list = {
            icon: icon,
            value: value
          };
          DivBlock.render(this.node, list);

          for (var key in list) {
            var com = list[key];
            var widget = com.getComponent(Widget);
            if (widget) widget.updateAlignment();
          }
        };

        return TinyItem;
      }(UiItem)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConfig.ts", ['cc'], function () {
  'use strict';

  var cclegacy, dynamicAtlasManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      dynamicAtlasManager = module.dynamicAtlasManager;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0e44bl3Y+hKqoSjGjDFff9+", "GameConfig", undefined);

      dynamicAtlasManager.enabled = true;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceBoardItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GalaxyData.ts', './UiItem.ts', './DivBlock.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, color, GalaxyData, UiItem, DivBlock;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      color = module.color;
    }, function (module) {
      GalaxyData = module.default;
    }, function (module) {
      UiItem = module.UiItem;
    }, function (module) {
      DivBlock = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "0f160ooyztADp3cT6Hj7E4q", "ResourceBoardItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ResourceBoardItem = exports('ResourceBoardItem', (_dec = ccclass('ResourceBoardItem'), _dec(_class = /*#__PURE__*/function (_UiItem) {
        _inheritsLoose(ResourceBoardItem, _UiItem);

        function ResourceBoardItem() {
          return _UiItem.apply(this, arguments) || this;
        }

        var _proto = ResourceBoardItem.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.setValue = function setValue(data, i) {
          if (i === void 0) {
            i = 0;
          }

          var profit = GalaxyData.getProfit(data).map(function (value) {
            var abs = Math.abs(value);

            if (value > 0) {
              return '+' + abs.toFixed(1);
            } else if (value < 0) {
              return '-' + abs.toFixed(1);
            }

            return '';
          });
          var capacity = GalaxyData.getMaxCapacity(data);
          var list = {
            icon: 'icon_res_' + i,
            value: data.resourceSurplus[i].toFixed(0),
            addition: profit[i],
            progress: capacity[i] == 0 ? 0 : data.resourceSurplus[i] / capacity[i]
          };
          list = DivBlock.render(this.node, list);

          if (list.addition) {
            var label = list.addition;

            if (list.addition.string[0] === '+') {
              label.color = color('#99ff99');
            } else if (list.addition.string[0] === '-') {
              label.color = color('#ff9999');
            } else {
              label.color = color('#ffff99');
            }
          }

          if (list.progress) {
            var progress = list.progress;
            progress.node.active = capacity[i] != 0;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ResourceBoardItem;
      }(UiItem)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GalaxyManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './PlanetData.ts', './GalaxyData.ts', './UserManager.ts', './DivBlock.ts', './Planet.ts'], function (exports) {
  'use strict';

  var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Camera, resources, Texture2D, tween, Vec3, Quat, Component, PlanetData, GalaxyData, UserManager, DivBlock, Planet;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Camera = module.Camera;
      resources = module.resources;
      Texture2D = module.Texture2D;
      tween = module.tween;
      Vec3 = module.Vec3;
      Quat = module.Quat;
      Component = module.Component;
    }, function (module) {
      PlanetData = module.default;
    }, function (module) {
      GalaxyData = module.default;
    }, function (module) {
      UserManager = module.default;
    }, function (module) {
      DivBlock = module.default;
    }, function (module) {
      Planet = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _temp;

      cclegacy._RF.push({}, "3e845TVW4xA0oNuoC86M9cP", "GalaxyManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GalaxyManager = exports('default', (_dec = ccclass('GalaxyManager'), _dec2 = property({
        type: Prefab,
        tooltip: '需要的预制'
      }), _dec3 = property({
        type: Camera,
        tooltip: '摄像机'
      }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GalaxyManager, _Component);

        function GalaxyManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "planet", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "camera", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "galaxies", null);

          _defineProperty(_assertThisInitialized(_this), "timer", 0);

          _defineProperty(_assertThisInitialized(_this), "sceneCtrl", null);

          _defineProperty(_assertThisInitialized(_this), "running", false);

          _defineProperty(_assertThisInitialized(_this), "waiting", false);

          _defineProperty(_assertThisInitialized(_this), "okNumber", 0);

          _defineProperty(_assertThisInitialized(_this), "loadingOk", false);

          return _this;
        }

        var _proto = GalaxyManager.prototype; // 这里开始写各种生命周期方法和自定义方法

        _proto.onLoad = function onLoad() {
          GalaxyManager.instance = this;
        };

        _proto.preLoad = function preLoad(seed) {
          var _this2 = this;

          var date = new Date();
          console.log('读取开始' + date.toLocaleTimeString());
          var galaxy = this.galaxies[seed];
          var allNum = galaxy.planets.length * 2;
          this.okNumber = 0;
          this.loadingOk = false;
          var loadList = [];
          galaxy.planets.forEach(function (data, i) {
            loadList.push(data.texture);

            if (data.ring) {
              loadList.push(data.ring);
            }
          });
          resources.load(loadList, function (err, images) {
            // console.log(err, texture);
            if (images.length === loadList.length) {
              images.forEach(function (image, i) {
                if (!GalaxyManager.textureCache.hasOwnProperty(loadList[i])) {
                  var texture = new Texture2D();
                  texture.image = image;
                  GalaxyManager.textureCache[loadList[i]] = texture;
                }
              }); // 不能直接限定类型Texture2d读就很离谱

              _this2.loadingOk = true; // console.log(images);

              if (_this2.waiting) {
                _this2.sceneCtrl.callPlanet();

                _this2.setGalaxy();
              }
            }
          });
        };

        _proto.checkOkTexture = function checkOkTexture(err, texture) {};

        _proto.setGalaxy = function setGalaxy() {
          var _this3 = this;

          this.waiting = false;
          this.loadingOk = false;
          var seed = UserManager.userData['nowGalaxy'];
          var galaxy = this.galaxies[seed];

          if (GalaxyManager.nowShownGalaxy != seed) {
            DivBlock.childrenStackSort(this.node, galaxy.planets.length, this.planet);
            galaxy.planets.forEach(function (data, i) {
              var planet = _this3.node.children[i].getComponent(Planet);

              planet.setPlanetData(data, i);
            });
            GalaxyManager.nowShownGalaxy = seed;
          }

          tween(this.node).to(0.5, {
            scale: new Vec3(1, 1, 1)
          }).start();
        };

        _proto.hideGalaxy = function hideGalaxy(callback, arg) {
          if (callback === void 0) {
            callback = null;
          }

          if (arg === void 0) {
            arg = null;
          }

          if (callback) {
            tween(this.node).to(0.5, {
              scale: new Vec3()
            }).call(callback.bind(arg)).start();
          } else {
            tween(this.node).to(0.5, {
              scale: new Vec3()
            }).start();
          }
        };

        _proto.update = function update(dt) {
          if (this.running) {
            this.timer += dt; //每五帧刷新一次

            if (this.timer >= 5) {
              this.updateTick();
              this.timer -= 5;
            }
          }
        }
        /**
         * 刷新下一个游戏时刻
         */
        ;

        _proto.updateTick = function updateTick() {
          UserManager.userData.time++;
          var notes = {}; // 刷新各个星系运行数据,遍历星系，刷新星系群中所有星系游戏时刻

          for (var seed in this.galaxies) {
            if (Object.prototype.hasOwnProperty.call(this.galaxies, seed)) {
              var galaxy = this.galaxies[seed]; //更新建筑修复后星球的探索状态，基地修复后星系的运行状态(修复需要时间，所以延迟5秒)

              GalaxyData.refreshGalaxy(galaxy); //只有星系运行时，才会刷新数据（造基地和修复基地与刷新数据无关）

              if (galaxy.running) {
                //刷新星系
                notes[seed] = this.updateGalaxy(galaxy);
              }
            }
          } // 渲染日志


          if (UserManager.userData.time == 1) {
            var description = '人类在地球上经历了漫长的文明发展过程，是时候准备冲出太阳系，建立更加广阔的文明了。\n\
            凭借地球的基地作为支撑，我们可以<color=#99ff99>在各大星球建立矿区基地</color>收集太阳系的资源，探索其它星系';
            this.sceneCtrl.setEmergency('逃离太阳系企划', description);
          }

          for (var val in notes) {
            var noteString = '';

            if (notes[val].length != 0) {
              for (var _iterator = _createForOfIteratorHelperLoose(notes[val]), _step; !(_step = _iterator()).done;) {
                var note = _step.value;
                noteString = noteString + '\n\ ' + note;
              }
            }

            if (noteString != '') {
              this.sceneCtrl.setEmergency('WARNING', noteString);
            }
          } // 渲染


          this.sceneCtrl.renderPlanetScene();
        }
        /**
         * 按星系刷新下一个游戏时刻
         * @param galaxy 星系数据
         * @returns 日志数据
         */
        ;

        _proto.updateGalaxy = function updateGalaxy(galaxy) {
          var _this4 = this;

          var notes = []; // 得到产能，计算能源供给情况，并给出日志

          var capacity = GalaxyData.getProduction(galaxy); //number:[能源消耗,能源产量,其它资源产量]

          notes = this.galaxyResourceUpdate(capacity, galaxy);
          galaxy.planets.forEach(function (planet) {
            //更新星球资源剩余程度
            PlanetData.updateExhaustion(planet);

            _this4.updateEmergency(galaxy, planet, notes);

            console.log(planet, planet.explore);
          });
          this.preventOverflow(galaxy, notes); // 概率突发事件，并给出相应警示

          return notes;
        }
        /**
         * 按星球刷新下一个游戏时刻的突发事件
         * @param planet 星球数据
         * @returns notes
         */
        ;

        _proto.updateEmergency = function updateEmergency(galaxy, planet, notes) {
          //突发事件：只对已探索或有设施的行星有效，且不发生在地球
          if ((planet.explore || planet.buildings.length) && planet.orbitalRadius != 0 && planet.texture != 'Earth') {
            //中招的概率，0到10000的整数
            var randNumber = Math.floor(Math.random() * 10000); //记录损失能源资源

            var lossResource = [0, 0, 0]; //0.1%的概率，想想你抽的卡池

            if (randNumber >= 9990) {
              //是否存在已损坏的设施
              var existBroken = false; //该星球变为未探索

              planet.explore = false; //该星球建筑全部损毁

              for (var i = 0; i < planet.buildings.length; i++) {
                //如果本来就是坏的，直接砸没
                if (planet.buildings[i].broken) {
                  existBroken = true;
                  planet.buildings.splice(i, 1);
                  continue;
                }

                planet.buildings[i].broken = true;
                planet.buildings[i].level = 1; //如果是基地，停止运行

                if (planet.buildings[i].type == 0) {
                  galaxy.running = false;
                }
              } //损失能源资源


              for (var _i = 0; _i < 3; _i++) {
                //得到星球容量
                var facilityCapacity = PlanetData.getCapacity(planet)[_i]; //得到星系储量


                var galaxyCapacity = galaxy.resourceSurplus[_i] * 0.8;
                lossResource[_i] = Math.floor(facilityCapacity < galaxyCapacity ? facilityCapacity : galaxyCapacity);
                galaxy.resourceSurplus[_i] -= lossResource[_i];
              }

              notes.push(planet.name + '遭到好大的小行星撞击，不幸毁天灭地，设施全部损坏，损失' + lossResource[0] + '能源，' + lossResource[1] + '晶钢，' + lossResource[2] + '芯髓');

              if (existBroken) {
                notes.push('且' + planet.name + '上原本已损坏的设施被直接砸没了');
              }
            } //是否砸到设施分情况讨论
            //0.9%概率没砸到设施，血赚
            else if (randNumber > 9900) {
                var gainResource = [0, 0, 0];

                for (var _i2 = 0; _i2 < 3; _i2++) {
                  gainResource[_i2] += Math.floor(1000 * Math.random());
                  galaxy.resourceSurplus[_i2] += gainResource[_i2];
                }

                notes.push(planet.name + '遭到较小的小行星撞击，还好未撞到设施，获得' + gainResource[0] + '能源，' + gainResource[1] + '晶钢，' + gainResource[2] + '芯髓');
                this.preventOverflow(galaxy, notes);
              } //1%概率砸到一个设施，如果本来就是坏的，直接砸没了
              else if (randNumber > 9800) {
                  //看看砸哪个
                  var _i3 = Math.floor(Math.random() * 10) % planet.buildings.length; //砸的是什么


                  var boomType = planet.buildings[_i3].type - 1;
                  var boomTypeString = ''; //对应资源扣光光

                  if (boomType >= 0 && boomType <= 2) {
                    //得到星球容量
                    var _facilityCapacity = PlanetData.getCapacity(planet)[boomType]; //得到星系储量

                    var _galaxyCapacity = galaxy.resourceSurplus[boomType] * 0.8;

                    lossResource[boomType] = Math.floor(_facilityCapacity < _galaxyCapacity ? _facilityCapacity : _galaxyCapacity);
                    galaxy.resourceSurplus[boomType] -= lossResource[boomType];
                  }

                  switch (boomType) {
                    //基地：糟糕
                    case -1:
                      {
                        //损失能源资源
                        for (var j = 0; j < 3; j++) {
                          //得到星系储量
                          var _galaxyCapacity2 = galaxy.resourceSurplus[j] * 0.5;

                          lossResource[j] = Math.floor(_galaxyCapacity2);
                          galaxy.resourceSurplus[j] -= lossResource[j]; //星系停止运行

                          galaxy.running = false;
                        }

                        notes.push(planet.name + '遭到中等大小的小行星撞击，然而命中基地，损失' + lossResource[0] + '能源，' + lossResource[1] + '晶钢，' + lossResource[2] + '芯髓');
                        break;
                      }
                    //能源：无伤大雅

                    case 0:
                      {
                        boomTypeString = '能源';
                        notes.push(planet.name + '遭到中等大小的小行星撞击，命中' + boomTypeString + '矿井，损失' + lossResource[0] + boomTypeString + 'pa');
                        break;
                      }
                    //晶钢：一般

                    case 1:
                      {
                        boomTypeString = '晶钢';
                        notes.push(planet.name + '遭到中等大小的小行星撞击，命中' + boomTypeString + '矿井，损失' + lossResource[1] + boomTypeString + 'pa');
                        break;
                      }
                    //芯髓：重大损失

                    case 2:
                      {
                        boomTypeString = '芯髓';
                        notes.push(planet.name + '遭到中等大小的小行星撞击，命中' + boomTypeString + '矿井，损失' + lossResource[2] + boomTypeString + 'pa');
                        break;
                      }
                  } //设施损坏，降级
                  //如果本来就是坏的，直接炸没


                  if (boomType !== 3
                  /*没考虑行星防御系统，爬*/
                  ) {
                      if (planet.buildings[_i3].broken) {
                        notes.push('由于' + boomTypeString + '矿井原本已损坏，这回直接被砸没了');
                        planet.buildings.splice(_i3, 1);
                      } else {
                        planet.buildings[_i3].broken = true;
                        planet.buildings[_i3].level = 1;
                      }
                    }
                } //小矿难


            if (galaxy.running) {
              // 求资源剩余程度最少的资源
              var deepestMine = 1;

              for (var _i4 = 0; _i4 < 3; _i4++) {
                if (deepestMine > PlanetData.getResidue(planet, _i4)) {
                  deepestMine = PlanetData.getResidue(planet, _i4);
                }
              } //小地震来了


              if (Math.random() * deepestMine < 0.005 && planet.buildings.length > 0) {
                //该星球建筑全部损毁
                for (var _i5 = 0; _i5 < planet.buildings.length; _i5++) {
                  if (planet.buildings[_i5].type == 0) {
                    galaxy.running = false;
                  }

                  planet.buildings[_i5].broken = true;
                } //减少能源资源


                for (var _i6 = 0; _i6 < 3; _i6++) {
                  //星球容量的50%
                  var _facilityCapacity2 = PlanetData.getCapacity(planet)[_i6] * 0.5; //星系储量的50%


                  var _galaxyCapacity3 = galaxy.resourceSurplus[_i6] * 0.5;

                  lossResource[_i6] = Math.floor((_facilityCapacity2 < _galaxyCapacity3 ? _facilityCapacity2 : _galaxyCapacity3) * 10) / 10;
                  galaxy.resourceSurplus[_i6] -= lossResource[_i6];
                }

                notes.push(planet.name + '发生地震,所有建筑损毁,损失' + lossResource[0] + '能源,' + lossResource[1] + '晶钢,' + lossResource[2] + '芯髓');
              }
            }
          }

          return notes;
        }
        /**
         * 更新星系资源能源
         * @param capacity: [能源消耗,能源产量,其它资源产量],galaxy: GalaxyData 星系
         * @returns notes   日志
         */
        ;

        _proto.galaxyResourceUpdate = function galaxyResourceUpdate(capacity, galaxy) {
          var notes = []; // 能源产量不足用量

          if (capacity[0] > capacity[1]) {
            // 如果能源剩余量不足消耗量，产能衰减，能源不变
            if (galaxy.resourceSurplus[0] < capacity[0]) {
              var rate = (galaxy.resourceSurplus[0] + capacity[1]) / capacity[0];
              galaxy.resourceSurplus[0] = 0; //资源增加，产能衰减

              for (var i = 1; i < 3; i++) {
                galaxy.resourceSurplus[i] += capacity[i + 1] * rate;
              } // 如果这个时刻是第一次到这个状态，给出日志提示


              if (galaxy.firstLoss) {
                notes.push(galaxy.name + '的现有能源不足以维持生产');
                galaxy.firstLoss = false;
              }
            } else {
              // 能源有剩余，会减少，
              //能源，资源增加
              for (var _i7 = 0; _i7 < 3; _i7++) {
                galaxy.resourceSurplus[_i7] += capacity[_i7 + 1];
              } //能源净减少


              galaxy.resourceSurplus[0] -= capacity[0]; //如果这个时刻是第一次到这个状态，给出日志提示

              if (galaxy.firstReduce) {
                notes.push(galaxy.name + '的能源产量不足用量,正消耗剩余能源用以生产');
                galaxy.firstReduce = false;
              }
            }
          } else {
            //资源增加
            for (var _i8 = 0; _i8 < 3; _i8++) {
              galaxy.resourceSurplus[_i8] += capacity[_i8 + 1];
            } //能源净增加


            galaxy.resourceSurplus[0] -= capacity[0];
          }

          return notes;
        }
        /**
        * 防止星系资源溢出
        * @param galaxy: GalaxyData,notes: any[]
        */
        ;

        _proto.preventOverflow = function preventOverflow(galaxy, notes) {
          //得到星系资源容量
          var storage = GalaxyData.getMaxCapacity(galaxy); //number:[能源上限，资源1上限，资源2上限]
          //判断资源能源是否溢出

          for (var i = 0; i < storage.length; i++) {
            //若现有资源大于存储量,使现有资源等于存储量
            if (galaxy.resourceSurplus[i] > storage[i]) {
              galaxy.resourceSurplus[i] = storage[i]; //每个星系溢出只会提示一次

              if (!galaxy.haveOverflow[i]) {
                galaxy.haveOverflow[i] = true;

                switch (i) {
                  case 0:
                    {
                      notes.push(galaxy.name + '能源溢出');
                      break;
                    }

                  case 1:
                    {
                      notes.push(galaxy.name + '晶钢溢出');
                      break;
                    }

                  case 2:
                    {
                      notes.push(galaxy.name + '芯髓溢出');
                      break;
                    }
                }
              }
            }
          }
        } // 各种操作的逻辑都写在这个脚本里面，比如建造，探索啥的，判断条件能不能行，逻辑怎么运作

        /**
         * 设置游戏是否运行，在进行一些界面操作需要停止
         * @param running 是否运行
         */
        ;

        _proto.setRunning = function setRunning(running) {
          if (running === void 0) {
            running = true;
          }

          if (running && !this.running) ;else if (this.running && !running) ;
          this.running = running;
        };

        _proto.requestRunning = function requestRunning(running) {
          if (running === void 0) {
            running = true;
          }

          if (UserManager.userData['pause']) {
            running = false;
          }

          this.setRunning(running);
        }
        /**
         * 镜头移到星球上
         * @param i 星球id，-1为取消聚焦
         * 
         */
        ;

        _proto.focus = function focus(i) {
          var _this$node$getChildBy3, _this$node$getChildBy4;

          if (i === void 0) {
            i = -1;
          }

          var rotation = new Vec3();
          var cameraRotation = new Quat(0, 1, 0, 6.123234262925839e-17);
          var standScal = new Vec3(2.842609239610561, 2.8426092396105616, 2.842609239610561); //太阳的世界Scal为标准

          var otherScal = new Vec3(1.7800867795983952, 1.7800867795983952, 1.7800867795983952); //以太阳系中的土星为标准

          var iScal = new Vec3(); //console.log("================");

          console.log(i);
          console.log("改变前相机的位置"); //{x: 3.12090215858133e-16, y: 0, z: -12.594765663146973}

          if (i == -1) {
            var _this$node$getChildBy, _this$node$getChildBy2;

            ((_this$node$getChildBy = this.node.getChildByName('.' + 0)) === null || _this$node$getChildBy === void 0 ? void 0 : _this$node$getChildBy.getChildByName("Sphere")).getWorldPosition(rotation); //获得中心星球的位置
            //////////////////

            ((_this$node$getChildBy2 = this.node.getChildByName('.' + 0)) === null || _this$node$getChildBy2 === void 0 ? void 0 : _this$node$getChildBy2.getChildByName("Sphere")).getWorldScale(iScal); //获得中心星球的Scal
            ///////////////
            //若镜头方向不正，则调整镜头方向

            if (this.camera.node.worldRotation != cameraRotation) {
              tween(this.camera.node).to(0.5, {
                worldRotation: cameraRotation
              }, {
                easing: 'smooth'
              }).start();
            }

            if (iScal > standScal) {
              //若此星球的Scal大于太阳的Scal
              console.log("llllllllllllllllllllllllll");
              tween(this.camera.node) //调整位置
              .to(0.5, {
                worldPosition: new Vec3(rotation.x, rotation.y, rotation.z - 17)
              }, {
                easing: 'smooth'
              }) //.union()
              .start();
            } else {
              tween(this.camera.node) //再调整位置
              .to(0.5, {
                worldPosition: new Vec3(rotation.x, rotation.y, rotation.z - 10)
              }, {
                easing: 'smooth'
              }) //.union()
              .start();
            }

            return;
          }

          console.log("星球的位置");
          ((_this$node$getChildBy3 = this.node.getChildByName('.' + i)) === null || _this$node$getChildBy3 === void 0 ? void 0 : _this$node$getChildBy3.getChildByName("Sphere")).getWorldPosition(rotation); //获得星球所在位置

          ((_this$node$getChildBy4 = this.node.getChildByName('.' + i)) === null || _this$node$getChildBy4 === void 0 ? void 0 : _this$node$getChildBy4.getChildByName("Sphere")).getWorldScale(iScal); //获得星球的Scal

          console.log(rotation);

          if (iScal >= otherScal) {
            //若此星球的Scal大于标准
            ///////////////////////////
            // console.log("大星球的尺寸");            
            // let test : Vec3 = new Vec3();
            // this.node.getChildByName('.'+i)?.getChildByName("Sphere")?.getWorldScale(test);
            // console.log(test);
            //////////////////////
            if (this.camera.node.worldRotation != cameraRotation) {
              //先调整镜头方向
              tween(this.camera.node).to(0.5, {
                worldRotation: cameraRotation
              }, {
                easing: 'smooth'
              }).start();
            }

            tween(this.camera.node) //调整镜头位置
            .to(0.5, {
              worldPosition: new Vec3(rotation.x - 0.2, rotation.y, rotation.z - 7)
            }, {
              easing: 'smooth'
            }).start(); //this.camera.node.setWorldPosition(rotation.x,rotation.y,rotation.z-5);
          } else {
            if (this.camera.node.worldRotation != cameraRotation) {
              //调整镜头方向
              tween(this.camera.node).to(0.5, {
                worldRotation: cameraRotation
              }, {
                easing: 'smooth'
              }).start();
            }

            tween(this.camera.node) //调整镜头位置
            .to(0.5, {
              worldPosition: new Vec3(rotation.x - 0.2, rotation.y, rotation.z - 2.5)
            }, {
              easing: 'smooth'
            }).start(); //this.camera.node.setWorldPosition(rotation.x,rotation.y,rotation.z-2.3);
          } //改变相机的位置


          console.log("目前相机的位置"); // let record = new Vec3;
          // // this.camera.node.worldRotation.getEulerAngles(record)
          // this.camera.node.getWorldPosition(record);
          // console.log(record);
          // console.log(rotation);
          //console.log("================");
        };

        return GalaxyManager;
      }(Component), _defineProperty(_class3, "instance", null), _defineProperty(_class3, "textureCache", {}), _defineProperty(_class3, "nowShownGalaxy", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "planet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/test.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './test2.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Layers, Component, Test2;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Layers = module.Layers;
      Component = module.Component;
    }, function (module) {
      Test2 = module.Test2;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "3e972l5NWxGTLKPZqsgJGE8", "test", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      /**
       * 测试：加在galaxy上测试
       */

      var Test = exports('Test', (_dec = ccclass('Test'), _dec2 = property({
        type: Prefab,
        tooltip: '测试'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Test, _Component);

        function Test() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "test", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = Test.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// [3]
        };

        _proto.onLoad = function onLoad() {
          this.myTest();
        };

        _proto.myTest = function myTest() {
          var newNode = instantiate(this.test);
          newNode.addComponent(Test2);
          console.log(newNode);
          this.node.addChild(newNode); //         var otherNode=new Node("otherNode");
          //         otherNode.parent=this.node;
          // //克隆
          //         var clone=instantiate(this.test);
          //         otherNode.addChild(clone);
          //         //this.node.layer=Layers.Enum.UI_2D

          this.node.layer = Layers.Enum.UI_2D;
          console.log("测试测试测试测试测试测试测试测试测试");
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Test;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "test", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneGalaxy.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './PlanetData.ts', './GalaxyData.ts', './UserManager.ts', './AudioCtrl.ts', './Setting.ts', './GameControl.ts', './DivBlock.ts', './GalaxyManager.ts', './UpgradeBoard.ts', './EmergencyBoard.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, Prefab, AudioClip, ToggleContainer, instantiate, Sprite, game, PlanetData, GalaxyData, UserManager, AudioCtrl, Setting, GameControl, DivBlock, GalaxyManager, UpgradeBoard, EmergencyBoard;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      ToggleContainer = module.ToggleContainer;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      game = module.game;
    }, function (module) {
      PlanetData = module.default;
    }, function (module) {
      GalaxyData = module.default;
    }, function (module) {
      UserManager = module.default;
    }, function (module) {
      AudioCtrl = module.default;
    }, function (module) {
      Setting = module.default;
    }, function (module) {
      GameControl = module.default;
    }, function (module) {
      DivBlock = module.default;
    }, function (module) {
      GalaxyManager = module.default;
    }, function (module) {
      UpgradeBoard = module.UpgradeBoard;
    }, function (module) {
      EmergencyBoard = module.EmergencyBoard;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _temp;

      cclegacy._RF.push({}, "472b4yu8a9PjKp5Zk4EdQK+", "SceneGalaxy", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SceneGalaxy = exports('default', (_dec = ccclass('SceneGalaxy'), _dec2 = property({
        type: Node,
        tooltip: '返回按钮'
      }), _dec3 = property({
        type: Prefab,
        tooltip: '设置界面'
      }), _dec4 = property({
        type: AudioClip,
        tooltip: '关卡音乐'
      }), _dec5 = property({
        type: GalaxyManager,
        tooltip: '行星管理器'
      }), _dec6 = property({
        type: [ToggleContainer],
        tooltip: '星系各星球名称listView'
      }), _dec7 = property({
        type: Node,
        tooltip: '行星信息面板'
      }), _dec8 = property({
        type: [Node],
        tooltip: '弹出面板集合'
      }), _dec9 = property({
        type: UpgradeBoard,
        tooltip: '升级组件'
      }), _dec10 = property({
        type: EmergencyBoard,
        tooltip: '升级组件'
      }), _dec11 = property({
        type: [DivBlock],
        tooltip: '使用的一些scene'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_DivBlock) {
        _inheritsLoose(SceneGalaxy, _DivBlock);

        function SceneGalaxy() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _DivBlock.call.apply(_DivBlock, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "backButton", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "settingPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "bgm", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "manager", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "listViews", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "planetPanel", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "boards", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "upgrade", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "emergency", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "scenes", _descriptor10, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "chosenPlanet", -1);

          _defineProperty(_assertThisInitialized(_this), "settingNode", null);

          return _this;
        }

        var _proto = SceneGalaxy.prototype; // LIFE-CYCLE CALLBACKS:

        _proto.onLoad = function onLoad() {
          _DivBlock.prototype.onLoad.call(this);

          this.manager.sceneCtrl = this;
          this.upgrade.sceneCtrl = this;
          this.upgrade.node.active = false; // 读取存档

          this.settingNode = instantiate(this.settingPrefab);
          this.settingNode.parent = this.node;
          this.settingNode.active = false;
        };

        _proto.start = function start() {
          // super.start()
          // console.log(view.getCanvasSize());
          // console.log(view.getDesignResolutionSize());
          AudioCtrl.playBgm(this.bgm, 1); // UserManager.clearSaveData()  // 每次进游戏清空存档，便于测试

          var solar = UserManager.getGalaxy(0);

          if (!solar) {
            // 未创建太阳系
            UserManager.getGalaxy()[0] = new GalaxyData(0);
            UserManager.saveData();
          }

          this.manager.galaxies = UserManager.getGalaxy();
          this.manager.node.active = true;
          this.gameStart();
        };

        _proto.blockEnter = function blockEnter(id) {
          _DivBlock.prototype.blockEnter.call(this, id);

          if (this.stack.length >= 2 && this.backButton) {
            var params = {
              time: this.transtionTime
            };
            this.nodeEnter(this.backButton, params);
          }
        };

        _proto.blockBack = function blockBack() {
          _DivBlock.prototype.blockBack.call(this);

          if (this.stack.length <= 1 && this.backButton) {
            var params = {
              time: this.transtionTime
            };
            this.nodeExit(this.backButton, params);
          }
        };

        _proto.blockBackByButton = function blockBackByButton() {
          if (this.canOperate) {
            this.blockBack();
            this.manager.setGalaxy();
            this.manager.requestRunning(true);
          }
        };

        _proto.callGalaxy = function callGalaxy(event, data) {
          AudioCtrl.playSet('decision'); // 播放确认se
        };

        _proto.callFacility = function callFacility(event, data) {
          var btn = event.currentTarget;
          var id = btn.parent.parent.getSiblingIndex(); //没地方写了，这里设置星球是否已探索，涛哥震怒
          // 砍了
          // this.currentPlanet()!.buildings.forEach(building => {
          //     if (!building.broken)
          //         this.currentPlanet()!.explore = true;
          // });

          var facility = this.currentPlanet().buildings[id];
          AudioCtrl.playSet('decision'); // 播放确认se

          if (data === 'degrade') {
            // 降级或拆除
            this.upgrade.setDegrade(this.currentPlanet(), facility);
          } else {
            this.upgrade.setUpgrade(this.currentPlanet(), facility);
          }

          this.boards[0].active = true;
        };

        _proto.callUpgrade = function callUpgrade(event, data) {
          if (data === 'close') {
            AudioCtrl.playSet('cancel'); // 播放确认se
          } else {
            AudioCtrl.playSet('decision'); // 播放确认se
          }
        };

        _proto.callSetting = function callSetting(event, data) {
          AudioCtrl.playSet('decision'); // 播放确认se

          this.settingNode.active = true;
          var settingCom = this.settingNode.getComponent(Setting);
          settingCom.onSetting();
        };

        _proto.callSwitch = function callSwitch() {
          var callback = this.gameStart;
          this.blockHide();
          this.stack.pop();
          var params = {
            time: this.transtionTime
          };
          this.nodeExit(this.backButton, params);
          this.manager.hideGalaxy(callback, this);
        }
        /**
         * 暂停按钮
         */
        ;

        _proto.callPause = function callPause(event, data) {
          UserManager.userData['pause'] = !UserManager.userData['pause'];
          var name = UserManager.userData['pause'] ? 'btn_continue' : 'btn_pause';
          var target = event.target;
          var sprite = target.getComponent(Sprite);
          sprite.spriteFrame = GameControl.instance.atlasAssets[0].getSpriteFrame(name);
          this.manager.requestRunning(true);
        };

        _proto.callNameEdit = function callNameEdit(editBox, data) {
          if (editBox.string) {
            this.currentPlanet().name = editBox.string;
            UserManager.saveData();
            console.log(this.currentPlanet());
            this.renderPlanetScene();
          } else {
            editBox.string = this.currentPlanet().name;
          }
        };

        _proto.callGalaxyEdit = function callGalaxyEdit(editBox, data) {
          if (editBox.string) {
            this.currentPlanet().name = editBox.string;
            UserManager.saveData();
            this.renderPlanetScene();
          } else {
            editBox.string = this.currentPlanet().name;
          }
        };

        _proto.endGame = function endGame(event, data) {
          game.end();
        } // 从左边listView选择星球回调
        ;

        _proto.choosePlanet = function choosePlanet(toggle, data) {
          var index = toggle.node.getSiblingIndex();
          this.chosenPlanet = toggle.isChecked ? index : -1;
          var block1 = this.blocks[0].getComponent(DivBlock);

          if (this.chosenPlanet >= 0) {
            this.manager.requestRunning(false);
            block1.blockChange(1);
            this.renderPlanetPanel();
          } else {
            var container = toggle.node.parent.getComponent(ToggleContainer);

            if (!container.anyTogglesChecked()) {
              block1.blockChange(0);
              this.manager.focus();
              this.manager.requestRunning(true);
            }
          } //把这段注释了，貌似好一些了，不知道对后面的内容有没有影响，依然有问题
          // const con = toggle.node.parent!.getComponent(ToggleContainer)
          // if (con) {
          //     Tween.stopAllByTarget(toggle)
          //     con.toggleItems.forEach((toggle) => {
          //         tween(toggle)
          //             .call((toggle: Toggle) => {
          //                 toggle.enabled = false
          //             })
          //             .delay(this.transtionTime)
          //             .call((toggle: Toggle) => {
          //                 toggle.enabled = true
          //             })
          //             .start()
          //     })
          // }

        } // todo: 鼠标点击界面空白处：点中星球就选中，选中星球时没点中星球，取消星球选中
        ;

        _proto.callBlank = function callBlank(event, data) {
          // todo: 通过射线检测判断是否点中星球，拿到点中的星球，以及星球index等
          // 选中与否注意：通过listView的回调也能改是否选中，两种方式要融合好
          if (this.chosenPlanet) {
            this.cancelPlanet();
          }
        } // 取消星球选中
        ;

        _proto.cancelPlanet = function cancelPlanet() {
          var block1 = this.blocks[0].getComponent(DivBlock);
          block1.blockChange(0);
          this.manager.focus();
          this.manager.requestRunning(true);
        };

        _proto.gameStart = function gameStart(event, data) {
          if (!this.canOperate) return;
          var seed = UserManager.userData['nowGalaxy'];
          this.manager.waiting = true;
          this.manager.preLoad(seed);
        };

        _proto.callPlanet = function callPlanet() {
          if (this.stack.indexOf(0) === -1) {
            this.blockEnter(0);
          } else {
            this.blockShow();
          }

          this.renderPlanetScene();
          this.manager.running = true; // 打开了这个魔鬼开关，就开始跑了！
        };

        _proto.renderPlanetScene = function renderPlanetScene() {
          var scenePlanet = this.blocks[0].getComponent(DivBlock);
          var galaxy = this.getNowGalaxy(); // 1. 操作面板设置

          var operationPanel = scenePlanet.blocks[0];
          var planetList = {
            name: galaxy.name,
            // 这些数应该赋值成userdata中特定星球的属性
            state: GalaxyData.getStateString(galaxy),
            prosperity: '' //'繁荣度：' + 452

          }; // 时间计算

          var time = UserManager.userData['time'];
          planetList['time'] = UserManager.getTimeString(time); // 

          planetList = DivBlock.render(operationPanel, planetList); // console.log(planet);
          // 2. 渲染资源

          var resource = []; // 资源容量计算

          for (var i = 0; i < 3; i++) {
            resource.push([galaxy, i]);
          }

          var resourcePanel = scenePlanet.node.getChildByName('Resource');
          DivBlock.childrenStackSort(resourcePanel, 3, resourcePanel.children[0]);
          resource = DivBlock.render(resourcePanel, resource); // 2. listView设置

          var listView = scenePlanet.node.getChildByName('ListView');
          var list = this.getNowGalaxy().planets.map(function (planet, i) {
            return planet.name;
          });
          DivBlock.renderListView(listView, list);
        };

        _proto.renderPlanetPanel = function renderPlanetPanel() {
          var _this2 = this;

          var index = this.chosenPlanet;
          if (index < 0) return;
          var planetData = this.currentPlanet();
          this.manager.focus(index);
          var list = {
            name: planetData.name,
            // 这些数值从index对应的Planetdata取的，如这个是planetData.name
            kind: index === 0 ? '恒星' : '行星',
            planetRadius: planetData.radius,
            // list属性名是要渲染节点的名称，注意和实际取的属性名不一定对应
            orbitRadius: planetData.orbitalRadius.toFixed(3),
            resource: planetData.abundance,
            layout: [] // 取星球的建筑，如果数量没超上限，再加[null]

          };
          list.resource = list.resource.concat(planetData.hard.map(function (hard) {
            switch (hard) {
              case 0:
                return '低';

              case 1:
                return '中';

              case 2:
                return '高';

              default:
                return '—';
            }
          })).concat(PlanetData.getProfit(planetData).map(function (value) {
            var abs = Math.abs(value);

            if (value > 0) {
              return '+' + abs.toFixed(1);
            } else if (value < 0) {
              return '-' + abs.toFixed(1);
            }

            return '0';
          })).concat(PlanetData.getCapacity(planetData));
          planetData.buildings.forEach(function (building) {
            list.layout.push([_this2.getNowGalaxy(), planetData, building]);
          });
          if (list.layout.length < PlanetData.maxFacilityNum(planetData)) list.layout.push([null]); // 渲染

          var renderNode = this.planetPanel.getChildByName('Layout');
          var facilityLayout = renderNode.getChildByName('.layout');
          DivBlock.childrenStackSort(facilityLayout, list.layout.length, facilityLayout.children[0]);
          DivBlock.render(renderNode, list);
        };

        _proto.setEmergency = function setEmergency(title, description) {
          this.manager.requestRunning(false);
          this.emergency.node.active = true;
          this.emergency.setBlock(this);
          this.emergency.showEmergency(title, description);
        };

        _proto.currentPlanet = function currentPlanet() {
          if (this.chosenPlanet >= 0) {
            return this.getNowGalaxy().planets[this.chosenPlanet];
          } else {
            return null;
          }
        };

        _proto.getNowGalaxy = function getNowGalaxy() {
          var seed = UserManager.userData['nowGalaxy'];
          return UserManager.getGalaxy(seed);
        };

        return SceneGalaxy;
      }(DivBlock), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "settingPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgm", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "manager", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "listViews", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "planetPanel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "boards", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "upgrade", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "emergency", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "scenes", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourceItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UiItem.ts', './DivBlock.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, color, UiItem, DivBlock;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      color = module.color;
    }, function (module) {
      UiItem = module.UiItem;
    }, function (module) {
      DivBlock = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "4a17d+ghpBK95Q0DzfCe0Yj", "ResourceItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ResourceItem = exports('ResourceItem', (_dec = ccclass('ResourceItem'), _dec(_class = /*#__PURE__*/function (_UiItem) {
        _inheritsLoose(ResourceItem, _UiItem);

        function ResourceItem() {
          return _UiItem.apply(this, arguments) || this;
        }

        var _proto = ResourceItem.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.setValue = function setValue(icon, value, max, addition) {
          if (addition === void 0) {
            addition = 0;
          }

          var abs = Math.abs(addition);
          var addText = '';
          var c = '#99ff99';

          if (addition > 0) {
            addText = '+' + abs.toFixed(1);
          } else if (addition < 0) {
            addText = '-' + abs.toFixed(1);
            c = '#ff9999';
          }

          var list = {
            icon: icon,
            now: value.toFixed(0),
            max: max.toFixed(0),
            addition: addText
          };
          list = DivBlock.render(this.node, list);
          list.addition.color = color(c);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ResourceItem;
      }(UiItem)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AnimationCallback.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AudioCtrl.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, AudioClip, Component, AudioCtrl;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      Component = module.Component;
    }, function (module) {
      AudioCtrl = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "4d2eaodMQRNkp+jnNqdaOHI", "AnimationCallback", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var AnimationCallback = exports('default', (_dec = ccclass('AnimationCallback'), _dec2 = property({
        type: [AudioClip],
        tooltip: '可以播放的音效文件列表'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AnimationCallback, _Component);

        function AnimationCallback() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "sounds", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = AnimationCallback.prototype; // LIFE-CYCLE CALLBACKS:
        // onLoad () {}

        _proto.start = function start() {};

        _proto.castAttack = function castAttack() {};

        _proto.playSe = function playSe(id, volume) {
          if (id === void 0) {
            id = 0;
          }

          if (volume === void 0) {
            volume = 1;
          }

          AudioCtrl.playSe(this.sounds[id], volume);
        };

        _proto.destroyBattler = function destroyBattler() {//this.node.children.forEach(childNode => {
          // 得到子节点粒子和拖尾，不同步消失
          //let particle: cc.ParticleSystem | null = childNode.getComponent(cc.ParticleSystem)
          //let streck: cc.MotionStreak | null  = childNode.getComponent(cc.MotionStreak)
          //if (particle) {
          //childNode.setPosition(this.node.parent.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(childNode.position)))
          //childNode.angle = this.node.angle
          //childNode.setParent(this.node.parent)
          //particle.stopSystem()
          //} else if (streck) {
          //childNode.setPosition(this.node.parent.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(childNode.position)))
          //childNode.angle = this.node.angle
          //childNode.setParent(this.node.parent)
          //cc.tween(childNode)
          //.delay(streck.fadeTime)
          //.call((node) => {
          //node.destroy()
          //})
          //.start()
          //}
          //});
          // 如果自己节点是粒子或拖尾，延迟消失
          //if (this.getComponent(cc.ParticleSystem)) {
          //this.getComponent(cc.ParticleSystem).stopSystem()
          //} else if (this.getComponent(cc.MotionStreak)) {
          //cc.tween(this.node)
          //.delay(this.getComponent(cc.MotionStreak).fadeTime)
          //.call((node) => {
          //node.destroy()
          //})
          //.start()
          //} else {
          //this.node.destroy()
          //}
        } // update (dt) {}
        ;

        return AnimationCallback;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "sounds", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // // Learn TypeScript:
      // //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
      // // Learn Attribute:
      // //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
      // // Learn life-cycle callbacks:
      // //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
      // 
      // import { AudioCtrl } from "./GameCore";
      // 
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class AnimationCallback extends cc.Component {
      // 
      //     @property({
      //         type: [cc.AudioClip],
      //         tooltip:'可以播放的音效文件列表'
      //     })
      //     sounds: cc.AudioClip[] = [];
      // 
      //     // LIFE-CYCLE CALLBACKS:
      // 
      //     // onLoad () {}
      // 
      //     start () {
      // 
      //     }
      // 
      //     castAttack () {
      // 
      //     }
      // 
      //     playSe (id = 0, volume = 1) {
      //         AudioCtrl.playSe(this.sounds[id], volume)
      // 
      //     }
      // 
      //     
      //     destroyBattler () {
      //         this.node.children.forEach(childNode => {
      //             // 得到子节点粒子和拖尾，不同步消失
      //             let particle: cc.ParticleSystem | null = childNode.getComponent(cc.ParticleSystem)
      //             let streck: cc.MotionStreak | null  = childNode.getComponent(cc.MotionStreak)
      //             if (particle) {
      //                 childNode.setPosition(this.node.parent.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(childNode.position)))
      //                 childNode.angle = this.node.angle
      //                 childNode.setParent(this.node.parent)
      //                 particle.stopSystem()
      //             } else if (streck) {
      //                 childNode.setPosition(this.node.parent.convertToNodeSpaceAR(this.node.convertToWorldSpaceAR(childNode.position)))
      //                 childNode.angle = this.node.angle
      //                 childNode.setParent(this.node.parent)
      //                 cc.tween(childNode)
      //                 .delay(streck.fadeTime)
      //                 .call((node) => {
      //                     node.destroy()
      //                 })
      //                 .start()
      //             }
      //             
      //         });
      //         // 如果自己节点是粒子或拖尾，延迟消失
      //         if (this.getComponent(cc.ParticleSystem)) {
      //             this.getComponent(cc.ParticleSystem).stopSystem()
      //         } else if (this.getComponent(cc.MotionStreak)) {
      //             cc.tween(this.node)
      //             .delay(this.getComponent(cc.MotionStreak).fadeTime)
      //             .call((node) => {
      //                 node.destroy()
      //             })
      //             .start()
      //         } else {
      //             this.node.destroy()
      //         }
      //     }
      // 
      //     // update (dt) {}
      // }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Planet.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GalaxyManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, SphereLight, SpotLight, Vec3, MeshRenderer, Component, GalaxyManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      SphereLight = module.SphereLight;
      SpotLight = module.SpotLight;
      Vec3 = module.Vec3;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }, function (module) {
      GalaxyManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "51033u3TQlGPK9J3JmvofEz", "Planet", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Planet = exports('default', (_dec = ccclass('Planet'), _dec2 = property({
        type: Node,
        tooltip: '球体模型'
      }), _dec3 = property({
        type: SphereLight,
        tooltip: '球光照'
      }), _dec4 = property({
        type: SpotLight,
        tooltip: '光照模型'
      }), _dec5 = property({
        type: Node,
        tooltip: '是否有环'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Planet, _Component);

        function Planet() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "sphere", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "light", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spot", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "ring", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "data", null);

          return _this;
        }

        var _proto = Planet.prototype;

        _proto.start = function start() {// [3]
        };

        _proto.setPlanetData = function setPlanetData(data, i) {
          this.data = data;
          var fixed = data.orbitalRadius == 0;
          var scale = Math.log10(data.radius) - 3;
          this.sphere.setScale(new Vec3(scale, scale, scale));
          var pos = new Vec3(this.sphere.position);
          pos.x = Math.sqrt(data.orbitalRadius) * 3 + 0.8 * i; // 显示在界面中的半径，最好用一个以data.orbitalRadius为自变量的函数变换一下

          this.sphere.setPosition(pos);
          this.light.node.active = fixed;
          this.light.size = scale / 2;
          this.light.range = scale * 1.3 / 2; // 行星聚光灯

          this.spot.node.active = !fixed;
          this.spot.size = 0.2 * scale;
          this.spot.range = 1 * scale;
          var newPos = new Vec3(-scale, 0, 0);
          this.spot.node.setPosition(newPos.add(pos)); // 设置球体材质

          var sphereMesh = this.sphere.getComponent(MeshRenderer);
          var sphereMaterial = sphereMesh.material;
          var texture = GalaxyManager.textureCache[data.texture];
          sphereMaterial.setProperty("albedoMap", texture); // 设置环材质

          this.ring.active = !!data.ring;

          if (this.ring.active) {
            var ringMesh = this.ring.getComponent(MeshRenderer);
            var ringMaterial = ringMesh.material;
            var ringTexture = GalaxyManager.textureCache[data.ring];
            ringMaterial.setProperty("albedoMap", ringTexture);
          } // 自转公转随机设定


          var rotation = new Vec3();
          this.node.rotation.getEulerAngles(rotation);
          rotation.y += Math.random() * 180 * Math.sqrt(Math.sqrt(this.data.orbitalAngularVelocity));
          this.node.setRotationFromEuler(rotation);
          this.sphere.rotation.getEulerAngles(rotation);
          rotation.y += Math.random() * 180 * Math.sqrt(this.data.spinVelocity);
          this.sphere.setRotationFromEuler(rotation);
        };

        _proto.update = function update(dt) {
          var running = GalaxyManager.instance.running;

          if (running) {
            var rotation = new Vec3();
            this.node.rotation.getEulerAngles(rotation);
            rotation.y += dt * Math.sqrt(Math.sqrt(this.data.orbitalAngularVelocity)) * 3;
            this.node.setRotationFromEuler(rotation);
            this.sphere.rotation.getEulerAngles(rotation);
            rotation.y += dt * Math.sqrt(this.data.spinVelocity) * 3;
            this.sphere.setRotationFromEuler(rotation);
          }
        };

        return Planet;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sphere", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "ring", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UpgradeBoard.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './FacilityData.ts', './PlanetData.ts', './GalaxyData.ts', './UserManager.ts', './AudioCtrl.ts', './DivBlock.ts', './Utils.ts', './ListBox.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, RichText, Layout, Prefab, Button, Component, DataManager, FacilityData, PlanetData, GalaxyData, UserManager, AudioCtrl, DivBlock, Utils, ListBox;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      RichText = module.RichText;
      Layout = module.Layout;
      Prefab = module.Prefab;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      FacilityData = module.default;
    }, function (module) {
      PlanetData = module.default;
    }, function (module) {
      GalaxyData = module.default;
    }, function (module) {
      UserManager = module.default;
    }, function (module) {
      AudioCtrl = module.default;
    }, function (module) {
      DivBlock = module.default;
    }, function (module) {
      Utils = module.default;
    }, function (module) {
      ListBox = module.ListBox;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "53d46riXTpJo6q8nepchkB3", "UpgradeBoard", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property; // enum Demand {upgrade, fix, degrade, remove}

      var UpgradeBoard = exports('UpgradeBoard', (_dec = ccclass('UpgradeBoard'), _dec2 = property({
        type: RichText,
        tooltip: '行为描述富文本'
      }), _dec3 = property({
        tooltip: '展示变化和条件的两个layout。',
        type: [Layout]
      }), _dec4 = property({
        type: ListBox,
        tooltip: '选建需要的listBox'
      }), _dec5 = property({
        type: [Prefab],
        tooltip: '需要的比较项和条件项预制'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UpgradeBoard, _Component);

        function UpgradeBoard() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "optionText", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "layouts", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "listBox", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "itemPrefabs", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "sceneCtrl", null);

          _defineProperty(_assertThisInitialized(_this), "upgrade", false);

          _defineProperty(_assertThisInitialized(_this), "planet", null);

          _defineProperty(_assertThisInitialized(_this), "facility", null);

          _defineProperty(_assertThisInitialized(_this), "okList", []);

          _defineProperty(_assertThisInitialized(_this), "newFacilityId", 0);

          _defineProperty(_assertThisInitialized(_this), "newFacilityLevel", 0);

          return _this;
        }

        var _proto = UpgradeBoard.prototype;

        _proto.close = function close() {
          this.node.active = false;
          this.sceneCtrl.renderPlanetPanel();
          this.sceneCtrl.renderPlanetScene();
        };

        _proto.setUpgrade = function setUpgrade(planet, facility) {
          var _this2 = this;

          this.planet = planet;
          this.facility = facility;
          this.upgrade = true;
          var list = {
            title: '设施',
            action_title: '请选择需要修建的设施',
            demand_title: '所需条件：',
            btn_action: '升级'
          };
          this.listBox.node.active = !facility;

          if (facility) {
            if (facility.broken) {
              list.btn_action = '修复';
            } else {
              var name = FacilityData.getFacilityName(facility);
              var level = 'I'.repeat(facility.level + 1);
              list.action_title = "\u5347\u7EA7\u5EFA\u7B51 <color=#acdaff>" + name + "</color> \u81F3\u7B49\u7EA7 <color=#0cdaff>" + level + "</color> \u6548\u679C\uFF1A";
            }

            this.setDemand(planet, facility);
          } else {
            list.btn_action = '建造';
            this.okList = PlanetData.availableFacilities(planet, this.sceneCtrl.getNowGalaxy()); // console.log(this.okList);

            if (this.okList.length == 0) {
              list.demand_title = '';
              list['description'] = '目前暂无设施可以修建';
              list.title = list.btn_action + list.title;
              this.listBox.setOptions([]);
              var button = this.node.children[0].getChildByName('.btn_action').getComponent(Button);
              button.interactable = false;
              DivBlock.childrenStackSort(this.layouts[0].node, 0, this.itemPrefabs[0]);
              DivBlock.childrenStackSort(this.layouts[1].node, 0, this.itemPrefabs[1]);
              DivBlock.render(this.node.children[0], list);
              return;
            } else {
              list.demand_title = '所需条件：';
              var nameList = this.okList.map(function (type) {
                return FacilityData.getFacilityName(type, FacilityData.getMinLevel(_this2.planet, type));
              });
              this.listBox.setOptions(nameList);
              var nowChoice = this.okList[0];
              this.setDemand(planet, nowChoice, FacilityData.getMinLevel(this.planet, nowChoice));
            }
          }

          list.title = list.btn_action + list.title;
          list.demand_title = list.btn_action + list.demand_title;
          DivBlock.render(this.node.children[0], list);
        };

        _proto.setDegrade = function setDegrade(planet, facility) {
          // todo: 降级操作
          this.planet = planet;
          this.facility = facility;
          this.upgrade = false;
          var list = {
            title: '设施',
            action_title: '请选择需要修建的设施',
            demand_title: '所需条件：',
            btn_action: '降级'
          };
          this.listBox.node.active = false;

          if (facility) {
            if (facility.broken) {
              list.btn_action = '修复';
              list.demand_title = list.btn_action + list.demand_title;
            } else {
              list.btn_action = facility.level == FacilityData.getMinLevel(planet, facility.type) ? '拆除' : '降级';
              list.demand_title = list.btn_action + '设施返还资源：';
            }

            this.setDemand(planet, facility);
          } else {
            console.warn('没建筑还降级，爬');
          }

          var name = FacilityData.getFacilityName(facility);
          list.action_title = "\u5C06\u8981" + list.btn_action + "\u7684 <color=#acdaff>" + name + "</color> \u8BBE\u65BD\u6548\u679C\uFF1A";
          list.title = list.btn_action + list.title;
          DivBlock.render(this.node.children[0], list);
        }
        /**
         * 
         * @param planet 
         * @param facility 有建筑为建筑，无建筑为类型
         * @param level 没有建筑，为建到的等级-1
         * @returns 
         */
        ;

        _proto.setDemand = function setDemand(planet, facility, level) {
          var _this3 = this;

          if (level === void 0) {
            level = 0;
          }

          var upgrade = this.upgrade;
          var list = {
            demand_layout: [],
            effect_layout: []
          };
          var type = facility instanceof Object ? facility.type : facility;
          level = facility instanceof Object ? facility.level : level; // 0.计算要显示的当前等级和左边等级

          var oldLv = -1;
          var nowLv = 1;

          if (facility instanceof Object) {
            var minLv = FacilityData.getMinLevel(planet, facility.type);

            if (!facility.broken) {
              nowLv = upgrade ? facility.level + 1 : level == minLv ? minLv : level - 1;
              oldLv = !upgrade && level == minLv ? -1 : level;
            } else {
              nowLv = level;
            }
          } else {
            this.newFacilityId = facility;
            this.newFacilityLevel = nowLv = level;
          }

          var data = DataManager.dataAssets['dataFacility'][type];
          list['description'] = data.description; // 1. 计算效果栏展示
          // 计算矿井产量

          if (type >= 1 && type <= 3) {
            var i = type - 1;
            var resName = DataManager.dataAssets['dataSystem']['resName'][i];
            var production = PlanetData.getResFactor(this.planet, i) * (nowLv + 1) * UserManager.getProductionBuff(i);
            var item = [resName + '产能', production.toFixed(1), '/月'];

            if (oldLv >= 0) {
              var productionOld = PlanetData.getResFactor(this.planet, i) * (oldLv + 1) * UserManager.getProductionBuff(i);
              item.push(productionOld.toFixed(1)); // 旧的产能
            }

            list.effect_layout.push(item);
          } // 计算各资源容量


          var capacity = FacilityData.getCapacity(type, nowLv);
          var oldCapacity = oldLv >= 0 ? FacilityData.getCapacity(type, oldLv) : null;
          capacity.forEach(function (value, i) {
            var resName = DataManager.dataAssets['dataSystem']['resName'][i];

            if (value != 0) {
              var _item = [resName + '容量', value, ''];

              if (oldCapacity) {
                _item.push(oldCapacity[i]);
              }

              list.effect_layout.push(_item);
            }
          }); // 能源消耗

          if (type >= 2 && type <= 4) {
            // 矿井：计算产出
            var _item2 = ['能源消耗', nowLv * FacilityData.energyPerLevel(), '/月'];

            if (oldLv >= 0) {
              _item2.push(oldLv * FacilityData.energyPerLevel()); // 当前等级产能

            }

            list.effect_layout.push(_item2);
          } // 2. 计算各资源要求


          var costRes = [];

          if (upgrade) {
            costRes = FacilityData.getUpgradeCost(facility, level);
          } else {
            if (facility instanceof Object) {
              var _minLv = FacilityData.getMinLevel(planet, facility.type);

              costRes = facility.broken ? FacilityData.getFixCost(facility) : facility.level == _minLv ? FacilityData.getRemoveReturn(facility) : FacilityData.getDegradeReturn(facility);
            } else {
              console.warn('没建筑还降级，爬');
              return;
            }
          }

          costRes.forEach(function (cost, i) {
            if (cost <= 0) return;
            var resName = DataManager.dataAssets['dataSystem']['resName'][i];
            var ok = _this3.upgrade || facility instanceof Object && facility.broken ? _this3.sceneCtrl.getNowGalaxy().resourceSurplus[i] >= cost : null;
            var item = ["<img src=\"icon_res_" + i + "\"/>" + resName, cost, ok];
            list.demand_layout.push(item);
          });
          DivBlock.childrenStackSort(this.layouts[0].node, list['effect_layout'].length, this.itemPrefabs[0]);
          DivBlock.childrenStackSort(this.layouts[1].node, list['demand_layout'].length, this.itemPrefabs[1]);
          DivBlock.render(this.node.children[0], list);
          console.log('demand', level, costRes);
          var button = this.node.children[0].getChildByName('.btn_action').getComponent(Button);
          button.interactable = this.canDecision();
        };

        _proto.toggleDemand = function toggleDemand(id, data) {
          var type = this.okList[id];
          var level = FacilityData.getMinLevel(this.planet, type);
          this.setDemand(this.planet, type, level);
        } // 
        ;

        _proto.canDecision = function canDecision() {
          var galaxy = this.sceneCtrl.getNowGalaxy();

          if (this.upgrade || this.facility && this.facility.broken) {
            var cost = this.facility ? this.facility.broken ? FacilityData.getFixCost(this.facility) : FacilityData.getUpgradeCost(this.facility) : FacilityData.getUpgradeCost(this.newFacilityId, this.newFacilityLevel);
            return GalaxyData.resourceEnough(galaxy, cost);
          }

          return true;
        };

        _proto.callDecision = function callDecision() {
          var galaxy = this.sceneCtrl.getNowGalaxy();

          if (this.upgrade || this.facility && this.facility.broken) {
            var cost = this.facility ? this.facility.broken ? FacilityData.getFixCost(this.facility) : FacilityData.getUpgradeCost(this.facility) : FacilityData.getUpgradeCost(this.newFacilityId, this.newFacilityLevel);

            if (GalaxyData.resourceEnough(galaxy, cost)) {
              AudioCtrl.playSet('equip');
              GalaxyData.gainResource(galaxy, cost, true);

              if (this.facility) {
                if (this.facility.broken) {
                  this.facility.broken = false;
                } else {
                  this.facility.level++;
                }
              } else {
                this.planet.buildings.push(new FacilityData(this.newFacilityId, this.newFacilityLevel));
              }
            } else {
              AudioCtrl.playSet('invalid');
            }
          } else {
            if (!this.facility) return;
            var minLv = FacilityData.getMinLevel(this.planet, this.facility.type);
            var payBack = this.facility.level == minLv ? FacilityData.getRemoveReturn(this.facility) : FacilityData.getDegradeReturn(this.facility);
            GalaxyData.gainResource(galaxy, payBack);

            if (this.facility.level == minLv) {
              Utils["delete"](this.planet.buildings, this.facility);
            } else {
              this.facility.level--;
            }
          }

          this.planet.explore = true;
          UserManager.saveData();
          this.close();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return UpgradeBoard;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "optionText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "layouts", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listBox", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefabs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UiItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "599f0Bv74lBWKw5u3pM8icF", "UiItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var UiItem = exports('UiItem', (_dec = ccclass('UiItem'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UiItem, _Component);

        function UiItem() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = UiItem.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// [3]
        };

        _proto.setValue = function setValue() {} // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return UiItem;
      }(Component)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EmergencyBoard.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DivBlock.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, DivBlock;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      DivBlock = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "5be8fkH4/pByLwK+DfEAvdQ", "EmergencyBoard", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var EmergencyBoard = exports('EmergencyBoard', (_dec = ccclass('EmergencyBoard'), _dec2 = property({
        tooltip: '展示变化和条件的两个layout。',
        type: Node
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_DivBlock) {
        _inheritsLoose(EmergencyBoard, _DivBlock);

        function EmergencyBoard() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _DivBlock.call.apply(_DivBlock, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "layout", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "sceneCtrl", null);

          return _this;
        }

        var _proto = EmergencyBoard.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.setBlock = function setBlock(fromBlock) {
          if (fromBlock === void 0) {
            fromBlock = null;
          }

          if (fromBlock) {
            this.sceneCtrl = fromBlock;
          } // [3]

        };

        _proto.showEmergency = function showEmergency(title, description) {
          var list = {
            title: title,
            description: description
          };
          DivBlock.render(this.layout, list);
        };

        _proto.close = function close() {
          this.node.active = false;
          this.sceneCtrl.manager.requestRunning(true);
          this.sceneCtrl.renderPlanetPanel();
          this.sceneCtrl.renderPlanetScene();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return EmergencyBoard;
      }(DivBlock), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlanetData.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FacilityData.ts', './UserManager.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, FacilityData, UserManager;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      FacilityData = module.default;
    }, function (module) {
      UserManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6dcabAlH6FII5yCXnsaEouP", "PlanetData", undefined);

      var exhaustion = 1200; // 600次资源耗竭

      /** 
       * !#zh 行星数据对象。 
       * @class PlanetData 
       */

      var PlanetData = exports('default', /*#__PURE__*/function () {
        //星球半径
        //轨道半径：轨道半径为0是恒星
        //轨道角速度
        //自旋速度
        //丰度 能源，资源1，资源2
        //开采难度
        //是否探索
        //星球建筑
        // 最新调整： 资源挖掘量，根据这个算枯竭程度（高等级建筑挖的更快了），具体看引用这个变量的代码
        // 显示在界面中的半径，但是实际还需要加上0.8*i，这里便于其他地方调用

        /**
         * 根据类型生成新星球
         * @param data 不带有完整数据的星球对象
         */
        function PlanetData(data) {
          if (data === void 0) {
            data = {};
          }

          _defineProperty(this, "type", 0);

          _defineProperty(this, "name", '');

          _defineProperty(this, "radius", 0);

          _defineProperty(this, "texture", '');

          _defineProperty(this, "ring", '');

          _defineProperty(this, "orbitalRadius", 0);

          _defineProperty(this, "orbitalAngularVelocity", 0);

          _defineProperty(this, "spinVelocity", 0);

          _defineProperty(this, "abundance", [0, 0, 0]);

          _defineProperty(this, "hard", [0, 0, 0]);

          _defineProperty(this, "explore", false);

          _defineProperty(this, "buildings", []);

          _defineProperty(this, "minedOres", [0, 0, 0]);

          _defineProperty(this, "radiusInUI", Math.sqrt(this.orbitalRadius) * 3);

          for (var key in this) {
            if (data.hasOwnProperty(key)) {
              this[key] = data[key];
            }
          }
        }
        /**
         * todo: 得到星球可建造的设施列表 附加一个设置星球是否已探索 判断行星防御系统是否研发未完成
         * @param planet 星球
         * @param galaxy 星球所在星系
         * @returns 可建设施的类型列表
         */


        PlanetData.availableFacilities = function availableFacilities(planet, galaxy) {
          //返回值
          var available = []; // type0-基地：星系没有基地只能建基地，有基地不能建基地

          var existType0 = false;

          for (var i = 0; i < galaxy.planets.length; i++) {
            for (var j = 0; j < galaxy.planets[i].buildings.length; j++) {
              if (galaxy.planets[i].buildings[j].type === 0) existType0 = true;
            }
          } //是否已研发


          var researchDyson = false;
          researchDyson = UserManager.techChecked(0, 3);
          var existDyson = false; // 恒星：只能建戴森球(未研发不能建)

          if (researchDyson) {
            for (var _i = 0; _i < galaxy.planets[0].buildings.length; _i++) {
              if (galaxy.planets[0].buildings[_i].type === 5) {
                //存在戴森球，不能建
                existDyson = true;
              }
            }
          } //是恒星


          if (galaxy.planets[0] == planet) {
            //已建基地，已研发戴森球，未建造戴森球
            if (existType0 && researchDyson && !existDyson) return [5];else return [];
          } //不是恒星，不存在基地


          if (!existType0) return [0]; //不是恒星，存在基地
          //下面的内容比较绕，不需要细看
          //[基地,能源,晶钢,芯髓,行星防御]

          var buildings = [0, 1, 2, 3, 4]; //一种建筑一个星球只能造一个

          for (var _i2 = 0; _i2 < planet.buildings.length; _i2++) {
            var type = planet.buildings[_i2].type; //存在这个建筑

            buildings[type] = 0;
          }

          for (var _i3 = 0; _i3 < buildings.length; _i3++) {
            //不存在这个建筑
            if (buildings[_i3]) {
              var minLv = FacilityData.getMinLevel(planet, _i3);

              if (FacilityData.hasUpgradeTech(_i3, minLv - 1)) {
                available.push(_i3);
              }
            }
          }

          return available;
        }
        /**
         * 星球可建最多设施数量
         * @param planet 星球
         * @returns 
         */
        ;

        PlanetData.maxFacilityNum = function maxFacilityNum(planet) {
          if (planet.orbitalRadius === 0) {
            return 1;
          } else if (planet.radius >= 25000) {
            return 3;
          } else if (planet.radius >= 5000) {
            return 2;
          } else {
            return 1;
          }
        }
        /**
         * 得到星球资源容量
         * @param planet 星球
         */
        ;

        PlanetData.getCapacity = function getCapacity(planet) {
          var result = [0, 0, 0];
          planet.buildings.forEach(function (building) {
            //遍历仓储量
            var capacity = FacilityData.getCapacity(building);
            result = result.map(function (value, i) {
              return value + capacity[i];
            });
          });
          return result;
        }
        /**
         * 得到资源剩余
         * @param planet 星球
         * @param i 资源id
         */
        ;

        PlanetData.getResidue = function getResidue(planet, i) {
          var rate = Math.max(exhaustion - planet.minedOres[i], 0) / exhaustion;
          return Math.pow(rate, 3) * 0.8 + 0.2;
        }
        /**
         * 得到星球能源消耗以及各资源产能
         * @param planet 星球
         * @returns 
         */
        ;

        PlanetData.getProduction = function getProduction(planet) {
          var result = [0, 0, 0, 0];
          planet.buildings.forEach(function (building) {
            if (!building.running || building.broken) return; // 计算能源消耗(建筑等级)

            if (building.type >= 2 && building.type <= 4) {
              result[0] += building.level * FacilityData.energyPerLevel();
            }

            if (building.type >= 1 && building.type <= 3) {
              var i = building.type - 1; // 资源生产公式

              result[i + 1] += (building.level + 1) * planet.abundance[i] * PlanetData.getResidue(planet, i) * UserManager.getProductionBuff(i);
            } else if (building.type == 5) {
              // 戴森球产率公式
              result[1] += (building.level + 1) * planet.abundance[0] * UserManager.getProductionBuff(0);
            }
          });
          return result;
        };

        PlanetData.getResFactor = function getResFactor(planet, i) {
          return planet.abundance[i] * PlanetData.getResidue(planet, i);
        }
        /**
         * 得到星球净产能
         * @param planet 星球
         * @returns 
         */
        ;

        PlanetData.getProfit = function getProfit(planet) {
          var production = PlanetData.getProduction(planet);
          var result = [-production[0], 0, 0];

          for (var i = 0; i < result.length; i++) {
            result[i] = result[i] + production[i + 1];
          }

          return result;
        }
        /**
         * 刷新资源开采程度
         * @param planet 星球
         */
        ;

        PlanetData.updateExhaustion = function updateExhaustion(planet) {
          planet.buildings.forEach(function (building) {
            if (!building.running || building.broken) return; // 计算能源消耗(建筑等级)，戴森球能源不会枯竭

            if (building.type >= 1 && building.type <= 3) {
              var i = building.type - 1;
              planet.minedOres[i] += building.level + 1;
              if (planet.minedOres[i] > exhaustion) planet.minedOres[i] = exhaustion;
            }
          });
        };

        return PlanetData;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "70811dY6zhNO5bcSqmxEXem", "DataManager", undefined);
      /** 
       * !#zh 数据管理器，负责游戏设定数据的加载。 
       * @class DataManager
       * @static
       */


      var DataManager = exports('default', function DataManager() {});

      _defineProperty(DataManager, "dataAssets", {});

      _defineProperty(DataManager, "planetNames", []);

      _defineProperty(DataManager, "galaxyNmaes", []);

      _defineProperty(DataManager, "dataInited", function (data) {
        return DataManager.dataAssets.hasOwnProperty(data);
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TechItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component, DataManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      DataManager = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "7b017xLKsNNw6jJsFlhQgVK", "TechItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TechItem = exports('TechItem', (_dec = ccclass('TechItem'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TechItem, _Component);

        function TechItem() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = TechItem.prototype;

        _proto.setValue = function setValue(type, id, researched) {
          var TechData = DataManager.dataAssets['dataTechTree'][type][id];
          var list = {
            name: TechData.name
          }; // DivBlock.render(this.node, list)
          // console.log(list);
        } // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        ;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return TechItem;
      }(Component)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GalaxyData.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './FacilityData.ts', './PlanetData.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, DataManager, FacilityData, PlanetData;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      FacilityData = module.default;
    }, function (module) {
      PlanetData = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "83ee6ch15ZI+ICgJDxBkjGi", "GalaxyData", undefined);

      var GalaxyData = exports('default', /*#__PURE__*/function () {
        //星球数组
        //能源资源剩余量[能源剩余量，资源1剩余量，资源2剩余量]
        //溢出只会提示一次
        //该星系是否到达过能源剩余量不足消耗量的状态
        //该星系是否到达过能源净减少状态

        /**
         * 根据类型生成新星系
         * @param seed 类型id,0是太阳系
         */
        function GalaxyData(seed) {
          var _this = this;

          _defineProperty(this, "name", '');

          _defineProperty(this, "planets", []);

          _defineProperty(this, "resourceSurplus", [0, 0, 0]);

          _defineProperty(this, "running", false);

          _defineProperty(this, "settleTime", 0);

          _defineProperty(this, "haveOverflow", [false, false, false]);

          _defineProperty(this, "firstLoss", true);

          _defineProperty(this, "firstReduce", true);

          if (seed == 0) {
            this.name = '太阳系';
            this.resourceSurplus = [3000, 3000, 3000]; // 初始给的资源

            var planets = DataManager.dataAssets['dataSolar'];
            planets.forEach(function (planet) {
              _this.planets.push(new PlanetData(planet));
            }); // 地球自动建一个基地，变为已探索

            this.planets[3].buildings.push(new FacilityData(0));
            this.planets[3].explore = true;
            this.running = true;
          } //随机生成算法
          else {
              //随机生成星系名称
              while (true) {
                this.name = 'M' + getRandom(0, 9) + getRandom(0, 9); //防止重名

                if (checkgalaxy(this.name)) {
                  break;
                }
              } //随机生成星系资源


              this.resourceSurplus = [0, 0, 0]; // for (let i = 0; i < 3; i++) {
              //     this.resourceSurplus[i] = 1000 + Math.floor(6000 * seededRandom(1, 0));
              // }
              //星球数量随机，5到15个不等

              var planetsNumber = getRandom(5, 15); //轨道半径增量

              var minTrackIncrement = getRandom(500, 1000) / planetsNumber; //最大公转速度

              var maxOrbitalAngularVelocity = 3 + seededRandom(1, 0) * 5; //公转速度减量

              var velocityDecrement = maxOrbitalAngularVelocity / (planetsNumber - 1);

              for (var i = 0; i < planetsNumber; i++) {
                //新的星球对象
                var newPlanet = new PlanetData(); //新的星球json
                //随机命名星球

                newPlanet['name'] = getNewName(); //如果是恒星

                if (i == 0) {
                  //星球半径
                  newPlanet['radius'] = getRandom(83520, 1183200000); //轨道半径

                  newPlanet['orbitalRadius'] = 0; //公转角速度

                  newPlanet['orbitalAngularVelocity'] = 0; //自转角速度

                  newPlanet['spinVelocity'] = 0; //丰度

                  newPlanet['abundance'] = [Math.floor(120 + seededRandom(1, 0) * 240), 0, 0]; //难度

                  newPlanet['hard'] = [0, 0, 0];
                } //行星
                else {
                    //行星半径最大值：不超过恒星半径
                    var maxRadius = 250222 < this.planets[0]['radius'] ? 250222 : this.planets[0]['radius'];
                    newPlanet['radius'] = getindex(2440, maxRadius); //恒星半径可能大于轨道半径，故单独计算第一颗行星

                    if (i == 1) {
                      //保留四位小数
                      newPlanet['orbitalRadius'] = Math.floor((seededRandom(1, 0) + this.planets[0].radius / 149600000) * 10000) / 10000;
                      newPlanet['orbitalAngularVelocity'] = maxOrbitalAngularVelocity;
                    } else {
                      //轨道增量
                      var trackIncrement = Math.floor(seededRandom(1, 0.1) * minTrackIncrement); //保留四位小数

                      newPlanet['orbitalRadius'] = Math.floor((this.planets[i - 1].orbitalRadius + trackIncrement) * 10000) / 10000;
                      newPlanet['orbitalAngularVelocity'] = this.planets[i - 1].orbitalAngularVelocity - velocityDecrement * seededRandom(1, 0.5);

                      if (newPlanet['orbitalAngularVelocity'] < 0) {
                        newPlanet['orbitalAngularVelocity'] = this.planets[i - 1].orbitalAngularVelocity / 2;
                      }
                    } // if(i > 1) { //防止星球重叠(若有序生成星球则不执行该部分)
                    //     while(true) {
                    //         let overlap: boolean = false; //记录是否产生重叠
                    //         for(let j = 1; j < i; j++) {
                    //             let oldOrbital = this.planets[j].orbitalRadius;
                    //             //如果有重叠
                    //             if(newPlanet['orbitalRadius'] > oldOrbital-0.1 && newPlanet['orbitalRadius'] < oldOrbital+0.1) {
                    //                 newPlanet['orbitalRadius'] = seededRandom(1,0) + getRandom(this.planets[0].radius/149600000,this.planets[0].radius/149600000+50);
                    //                 overlap = true;
                    //                 break;
                    //             }
                    //         }
                    //         if(!overlap) {
                    //             break;
                    //         }
                    //     }
                    // }


                    newPlanet['spinVelocity'] = 0.05 + Math.pow(seededRandom(1, 0) * 8, 2);

                    for (var j = 0; j < 3; j++) {
                      //丰度
                      newPlanet['abundance'][j] = Math.floor(seededRandom(1, 0) * 50 + 2);
                      var randomNumber = getRandom(0, 15);

                      if (randomNumber < 9) {
                        newPlanet['hard'][j] = 0;
                      } else if (randomNumber < 13) {
                        newPlanet['hard'][j] = 1;
                      } else {
                        newPlanet['hard'][j] = 2;
                      }
                    }
                  }

                this.planets.push(newPlanet);
              } //纹理和环


              for (var _i = 0; _i < this.planets.length; _i++) {
                var num = Math.floor(seededRandom(1, 0) * 100) % 21;
                this.planets[_i].texture = 'ground_' + num; //大行星随机带环吧

                if (_i && num > 12 && this.planets[_i].radius > 80000) this.planets[_i].ring = 'ring_' + num % 3;
              }
            } //生成伪随机数,替代Math.random


          function seededRandom(max, min) {
            max = max || 1;
            min = min || 0;
            seed = (seed * 9301 + 49297) % 233280;
            var rnd = seed / 233280.0;
            return min + rnd * (max - min);
          } //生成m到n之间的（包括m,n）随机整数


          function getRandom(m, n) {
            return Math.round(seededRandom(1, 0) * (n - m) + m);
          } //生成m到n之间的随机整数（指数分布）


          function getindex(m, n) {
            return Math.round(3 * Math.pow(Math.E, -3 * seededRandom(1, 0) * 4) * (n - m) + m);
          } //检查星球名称是否重复，若重复返回false


          function checkplanet(planetName) {
            DataManager.planetNames.forEach(function (value) {
              if (planetName == value) {
                return false;
              }
            });
            DataManager.planetNames.push(planetName);
            return true;
          } //检查星系名称是否重复


          function checkgalaxy(galaxyName) {
            DataManager.galaxyNmaes.forEach(function (value) {
              if (galaxyName == value) {
                return false;
              }
            });
            DataManager.galaxyNmaes.push(galaxyName);
            return true;
          } //生成星球随机名称


          function getNewName() {
            var firstNames = DataManager.dataAssets['galaxyName']; //得到firstname数组

            var lastNames = DataManager.dataAssets['galaxylastName'];
            var newName = '';

            while (true) {
              //产生两个随机数用来索引名称
              var nameIndex = [getRandom(0, firstNames.length), getRandom(0, lastNames.length)]; //如果有这个名称

              if (firstNames[nameIndex[0]] && lastNames[nameIndex[1]]) {
                newName = firstNames[nameIndex[0]] + lastNames[nameIndex[1]]; //判断星球名称是否重复

                if (checkplanet(newName)) {
                  return newName;
                }
              }
            }
          }
        }
        /**
        * 更新建筑修复后星球的探索状态，基地修复后星系的运行状态
        * @param galaxy 星系
        */


        GalaxyData.refreshGalaxy = function refreshGalaxy(galaxy) {
          // 换了个判断各星球是否已探索的地方，lsy震怒
          galaxy.planets.forEach(function (planet) {
            planet.explore = false; //判断星球是否已探索

            planet.buildings.forEach(function (building) {
              if (!building.broken) planet.explore = true;
            }); //判断星系是否running

            planet.buildings.forEach(function (building) {
              if (building.type === 0 && !building.broken) galaxy.running = true;
            });
          });
        }
        /**
         * todo: 得到星系运行状态
         * @param galaxy 星系
         * @returns 0没有基地，1停止运行，2低耗，3正常
         */
        ;

        GalaxyData.getState = function getState(galaxy) {
          if (galaxy.running) {
            var capacity = GalaxyData.getProduction(galaxy); //如果净消耗大于能源剩余

            if (capacity[0] - capacity[1] > galaxy.resourceSurplus[0]) {
              // 低耗运行
              return 2;
            } else {
              //正常运行
              return 3;
            }
          } else {
            //如果有基地
            for (var i = 0; i < galaxy.planets.length; i++) {
              for (var j = 0; j < galaxy.planets[i].buildings.length; j++) {
                if (galaxy.planets[i].buildings[j].type === 0) return 1;
              }
            }

            return 0; //没有基地
          }
        }
        /**
         * 得到星系运行状态文本
         * @param galaxy 星系
         * @returns 状态文字
         */
        ;

        GalaxyData.getStateString = function getStateString(galaxy) {
          var i = GalaxyData.getState(galaxy); // 低耗运行
          // 基地损坏：停止运行

          return ['尚未开拓', '停止运行', '低耗运行', '正常运行'][i];
        };

        GalaxyData.getMaxCapacity = function getMaxCapacity(galaxy) {
          var result = [0, 0, 0];
          var planets = galaxy.planets; // 遍历星球

          planets.forEach(function (planet) {
            var capacity = PlanetData.getCapacity(planet);
            result = result.map(function (value, i) {
              return value + capacity[i];
            });
          });
          return result; // [100,100,100]
        }
        /**
         * 得到星系一个tick(星系中所有星球总和)的能源消耗量和资源产出
         * @param galaxy 星系数据
         * @returns [能源消耗,能源产量,其它资源产量]
         */
        ;

        GalaxyData.getProduction = function getProduction(galaxy) {
          var result = [0, 0, 0, 0]; //遍历星球

          galaxy.planets.forEach(function (planet, i) {
            var production = PlanetData.getProduction(planet); //遍历星球上的能源资源数组

            result = result.map(function (value, i) {
              return value + production[i];
            });
          });
          return result; // [20,50,100,100]
        }
        /**
         * 得到星球净产能：注意低耗状态不能直接加净产能进去
         * @param planet 星球
         * @returns [能源，晶钻，芯片]
         */
        ;

        GalaxyData.getProfit = function getProfit(galaxy) {
          var production = GalaxyData.getProduction(galaxy);
          var result = [-production[0], 0, 0];

          for (var i = 0; i < result.length; i++) {
            result[i] += production[i + 1];
          }

          return result;
        }
        /**
         * 检测资源是否足够
         * @param galaxy 
         * @param resource 资源检测
         * @returns 
         */
        ;

        GalaxyData.resourceEnough = function resourceEnough(galaxy, resource) {
          return !resource.some(function (num, i) {
            return galaxy.resourceSurplus[i] < num;
          });
        };

        GalaxyData.gainResource = function gainResource(galaxy, resource, cost) {
          if (cost === void 0) {
            cost = false;
          }

          resource.forEach(function (num, i) {
            galaxy.resourceSurplus[i] += cost ? -num : num;
          });
        };

        return GalaxyData;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/test2.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, resources, Texture2D, MeshRenderer, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      resources = module.resources;
      Texture2D = module.Texture2D;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "8a038RsnnRHk6Zd+gjfpD01", "test2", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Test2 = exports('Test2', (_dec = ccclass('Test2'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Test2, _Component);

        function Test2() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "i", 0);

          return _this;
        }

        var _proto = Test2.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// [3]
        };

        _proto.onLoad = function onLoad() {// systemEvent.on(SystemEventType.TOUCH_START, this.beforeChange, this);
        }; // test2:Vec3[] = [new Vec3(1,1,1),new Vec3(2,2,2),new Vec3(3,3,3)];


        _proto.beforeChange = function beforeChange() {
          var _this2 = this; //let self = this;


          this.i %= 5;
          this.i++;
          resources.load(this.i + "/texture", Texture2D, function (err, texture) {
            var meshRenderer = _this2.node.getComponent(MeshRenderer); // let a = meshRenderer.getMaterial(0)!;
            // let a = meshRenderer.getMaterial(0) as unknown as Material;


            var a = meshRenderer.material;
            a.setProperty("albedoMap", texture); // let b :Vec3 =  this.node.scale;

            console.log(a.getProperty("albedoMap")); // this.node.setScale(this.test2[this.i]);
          }); // let meshRenderer : MeshRenderer= self.node.getComponent(MeshRenderer)!;
          // let a = meshRenderer.getMaterial(0)!;
          // // let a = meshRenderer.getMaterial(0) as unknown as Material;
          // //let a:Material| null = meshRenderer.material!;
          // a.setProperty("albedoMap",this.selfTexture);
          // console.log(a.getProperty("albedoMap"));
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return Test2;
      }(Component), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GalaxyData.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, sys, GalaxyData;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      GalaxyData = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8c3c2nSNjZCGJEe8SQkQalQ", "UserManager", undefined);

      var sign = 'userData';
      /** 
       * !#zh 玩家信息管理器，负责游戏存读档以及现有物品装备的存储。 
       * @class UserManager
       * @static
       */

      var UserManager = exports('default', /*#__PURE__*/function () {
        function UserManager() {}
        /**
         * 清空用户存档
         */

        /** 
         * !#zh 保存数据。
         * @method saveData
         * @return {Boolean} 
         */

        /** 
         * !#zh 读取数据。
         * @method loadData
         * @return {Boolean} 
         */

        /** 
         * !#zh 读取特定用户设定。 
         * @method getUserSettings
         * @param name 要读取的设定的名称
         * @return 
         */
        // 接下来具体写读取/检验详细数据的方法，供组件使用

        /** 
         * !#zh 读取特定星系。 
         * @method getGalaxy
         * @param seed 要读取的星系的种子，-1为读取所有星系
         * @returns 
         */

        /**
         * getExploreCost
         */


        UserManager.getExploreCost = function getExploreCost() {
          var num = Object.keys(UserManager.userData['galaxies']).length;
          var result = [5000 + 2500 * num, 2000 + 500 * num, 1500 * num];
          return result;
        };

        UserManager.getSeedNumber = function getSeedNumber(x, y, z) {
          var nx = Number(x);
          var ny = Number(y);
          var nz = Number(z);
          return nx * 1000000 + ny * 1000 + nz;
        };

        UserManager.checkSeedOk = function checkSeedOk(seed) {
          return !UserManager.userData['galaxies'].hasOwnProperty(seed);
        };

        UserManager.registerNewGalaxy = function registerNewGalaxy(seed) {
          UserManager.userData['galaxies'][seed] = new GalaxyData(seed);
          UserManager.userData['nowGalaxy'] = seed;
        }
        /**
         * static canSetNewTech
         */
        ;

        UserManager.canSetTech = function canSetTech(branch, i) {
          if (i == 0) return true;
          var demand = i < 5 ? i - 1 : i % 5;
          return UserManager.userData['techChecked'][branch].indexOf(demand) != -1;
        }
        /**
         * 是否研发了科技
         * @param i 分支
         * @param j 分支的科技序号
         */
        ;

        UserManager.techChecked = function techChecked(i, j) {
          return UserManager.userData['techChecked'][i].indexOf(j) != -1;
        }
        /**
         * 得到科技树对资源生产的加成
         * @param i 资源序号
         * @returns 
         */
        ;

        UserManager.getProductionBuff = function getProductionBuff(i) {
          var list = [[1.45, 2.05], [1.55, 2.35], [1.65, 2.5]];
          return UserManager.techChecked(i, 5) ? list[i][1] : UserManager.techChecked(i, 0) ? list[i][0] : 1;
        };

        UserManager.getTimeString = function getTimeString(time) {
          var year = 2021 + Math.floor((time + 8) / 12); // 是9月开始,

          var month = (time + 8) % 12 + 1; // 1-12月分别是0-11

          return year + '年' + month + '月';
        }
        /**
         * static getPosString
         */
        ;

        UserManager.getPosString = function getPosString(seed) {
          var x = Math.floor(seed / 1000000);
          var y = Math.floor(seed % 1000000 / 1000);
          var z = Math.floor(seed % 1000);
          return "X:" + x + "  Y:" + y + "  Z:" + z;
        };

        return UserManager;
      }());

      _defineProperty(UserManager, "userData", null);

      _defineProperty(UserManager, "clearSaveData", function () {
        UserManager.userData = {
          settings: {
            mute: false,
            musicVolume: 0.8,
            soundVolume: 0.8,
            skip: false
          },
          version: "Ver 0.0.0",
          // 后面加别的内容，如存档数据
          galaxies: {},
          // 星系seed=>情况
          nowGalaxy: 0,
          // 现在所在星系的seed
          techChecked: [[0, 1, 2, 3], [], []],
          time: 0,
          // 游戏时间
          pause: false // 手动设置暂停

        };
        UserManager.saveData(); // console.log('已重置存档');
      });

      _defineProperty(UserManager, "saveData", function () {
        var data = JSON.stringify(UserManager.userData);
        sys.localStorage.setItem(sign, data);
        return true;
      });

      _defineProperty(UserManager, "loadData", function () {
        var data = '';
        var userData = null;

        try {
          data = sys.localStorage.getItem(sign);
          userData = JSON.parse(data);
        } catch (error) {
          UserManager.clearSaveData();
          throw new Error(error);
        }

        if (!userData || !userData.version) {
          UserManager.clearSaveData();
          return true;
        } else {
          // 版本继承
          // switch (userData.version) {
          //     case "Ver 0.0.1":
          //     case "Ver 0.0.2":
          //         userData.version = "Ver 0.0.3"
          //         break;
          //     default:
          //         dataChanged = false;
          //         break;
          // }
          UserManager.userData = userData;
          UserManager.saveData();
          return true;
        }
      });

      _defineProperty(UserManager, "getUserSettings", function (name) {
        if (name === void 0) {
          name = '';
        }

        if (name) {
          if (UserManager.userData.settings.hasOwnProperty(name)) {
            return UserManager.userData.settings[name];
          }

          return false;
        } else {
          return UserManager.userData.settings;
        }
      });

      _defineProperty(UserManager, "getGalaxy", function (seed) {
        if (seed === void 0) {
          seed = -1;
        }

        if (UserManager.userData.hasOwnProperty('galaxies')) {
          if (seed == -1) {
            return UserManager.userData['galaxies'];
          } else {
            var galaxies = UserManager.userData['galaxies'];

            if (galaxies.hasOwnProperty(seed)) {
              return galaxies[seed];
            }

            return false;
          }
        } else {
          // 存档没有星系：错误，重置存档
          UserManager.clearSaveData(); // console.log('存档没有星系：错误，重置存档');

          return seed == -1 ? {} : false;
        }
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GalaxyItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GalaxyData.ts', './UiItem.ts', './DivBlock.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, GalaxyData, UiItem, DivBlock;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GalaxyData = module.default;
    }, function (module) {
      UiItem = module.UiItem;
    }, function (module) {
      DivBlock = module.default;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "8f788lsOqdMz6vT2lcxsdp6", "GalaxyItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GalaxyItem = exports('GalaxyItem', (_dec = ccclass('GalaxyItem'), _dec(_class = /*#__PURE__*/function (_UiItem) {
        _inheritsLoose(GalaxyItem, _UiItem);

        function GalaxyItem() {
          return _UiItem.apply(this, arguments) || this;
        }

        var _proto = GalaxyItem.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.setValue = function setValue(data) {
          var list = {
            name: data.name,
            state: GalaxyData.getStateString(data),
            resource: []
          };
          var profit = GalaxyData.getProfit(data);
          var capacity = GalaxyData.getMaxCapacity(data);

          for (var i = 0; i < profit.length; i++) {
            list.resource.push(["icon_res_" + i, data.resourceSurplus[i], capacity[i], profit[i]]);
          }

          var node = this.node.getChildByName('.resource');
          DivBlock.childrenStackSort(node, list.resource.length, node.children[0]);
          DivBlock.render(this.node, list);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return GalaxyItem;
      }(UiItem)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ListBox.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DivBlock.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Label, Sprite, ToggleContainer, EventHandler, Component, DivBlock;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      ToggleContainer = module.ToggleContainer;
      EventHandler = module.EventHandler;
      Component = module.Component;
    }, function (module) {
      DivBlock = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "940d4XZy2ZHpZq0HhvR6iwH", "ListBox", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ListBox = exports('ListBox', (_dec = ccclass('ListBox'), _dec2 = property({
        type: Label,
        tooltip: '目前所选内容文本'
      }), _dec3 = property({
        type: Sprite,
        tooltip: '展开/收起listView时，切换的箭头sprite'
      }), _dec4 = property({
        type: ToggleContainer,
        tooltip: '目前所选listView，需要其子节点有一个item'
      }), _dec5 = property({
        type: [EventHandler],
        tooltip: '触发事件'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ListBox, _Component);

        function ListBox() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "optionLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "toggleButton", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "listView", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "toggleEvent", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "listItem", null);

          _defineProperty(_assertThisInitialized(_this), "options", []);

          _defineProperty(_assertThisInitialized(_this), "nowOption", 0);

          return _this;
        }

        var _proto = ListBox.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// this.setOptions([
          //     '红烧大爬虾',
          //     '清蒸太阳系',
          //     'bug大杂烩',
          //     '没有了'
          // ])
          // [3]
        };

        _proto.setOptions = function setOptions(option, initOption) {
          if (initOption === void 0) {
            initOption = 0;
          }

          this.listItem = this.listView.node.children[0];
          this.updateListActive();
          this.options = option;
          this.optionLabel.string = '';
          DivBlock.childrenStackSort(this.listView.node, option.length, this.listView.node.children[0]);
          DivBlock.render(this.listView.node, option);

          if (option.length > 0) {
            this.listView.toggleItems[initOption].isChecked = true;
            var toggle = this.listView.activeToggles();
            this.optionLabel.string = toggle[0].node.getComponentInChildren(Label).string;
          }
        };

        _proto.setChoice = function setChoice(toggle, data) {
          var _this2 = this;

          if (this.options.length == 0) return;
          this.optionLabel.string = toggle.node.getComponentInChildren(Label).string;
          this.nowOption = this.listView.toggleItems.indexOf(toggle);
          this.toggleEvent.forEach(function (event) {
            event.emit([_this2.nowOption, event.customEventData]);
          });
          this.toggleList(); // this.toggleEvent.emit([this.nowOption, this.toggleEvent.customEventData])
        };

        _proto.toggleList = function toggleList(toggleEvent, data) {
          this.updateListActive(!this.listView.node.active);
        };

        _proto.updateListActive = function updateListActive(active) {
          if (active === void 0) {
            active = false;
          }

          this.listView.node.active = active;
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ListBox;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "optionLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toggleButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "listView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toggleEvent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneTransfer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './GalaxyData.ts', './UserManager.ts', './DivBlock.ts', './GalaxyItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, ToggleContainer, Prefab, Button, EditBox, DataManager, GalaxyData, UserManager, DivBlock, GalaxyItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ToggleContainer = module.ToggleContainer;
      Prefab = module.Prefab;
      Button = module.Button;
      EditBox = module.EditBox;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      GalaxyData = module.default;
    }, function (module) {
      UserManager = module.default;
    }, function (module) {
      DivBlock = module.default;
    }, function (module) {
      GalaxyItem = module.GalaxyItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "9d3a1sSv+xAC6neeQPJ008d", "SceneTransfer", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SceneTransfer = exports('SceneTransfer', (_dec = ccclass('SceneTransfer'), _dec2 = property({
        type: [ToggleContainer],
        tooltip: '星系各星球名称listView'
      }), _dec3 = property({
        type: [Prefab],
        tooltip: '使用的prefab'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_DivBlock) {
        _inheritsLoose(SceneTransfer, _DivBlock);

        function SceneTransfer() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _DivBlock.call.apply(_DivBlock, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "listViews", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "prefabs", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "sceneCtrl", null);

          _defineProperty(_assertThisInitialized(_this), "posBox", []);

          _defineProperty(_assertThisInitialized(_this), "resourceBox", []);

          _defineProperty(_assertThisInitialized(_this), "seedList", []);

          _defineProperty(_assertThisInitialized(_this), "transMax", []);

          _defineProperty(_assertThisInitialized(_this), "explore", []);

          _defineProperty(_assertThisInitialized(_this), "nowOption", -1);

          return _this;
        }

        var _proto = SceneTransfer.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.setBlock = function setBlock(fromBlock) {
          if (fromBlock === void 0) {
            fromBlock = null;
          }

          console.log();

          if (fromBlock) {
            // 带ctrl意味着是从别的画面进来的
            this.sceneCtrl = fromBlock;
            this.sceneCtrl.manager.requestRunning(false);
            this.sceneCtrl.manager.hideGalaxy();
            this.nowOption = -1;
            DivBlock.selectListView(this.listViews[0]);
            DivBlock.selectListView(this.listViews[1], 0);
            this.blockChange(0);
          }

          var left = this.node.children[0];
          var right = this.node.children[1];
          var galaxy = this.sceneCtrl.getNowGalaxy(); // 1. 左侧面板

          var nowPanel = left.getChildByName('galaxy_panel').getComponent(GalaxyItem);
          nowPanel.setValue(galaxy); // 下方其它星系

          var listView = this.listViews[0];
          var list = [];
          this.seedList = [];

          for (var seed in UserManager.userData['galaxies']) {
            var numSeed = Number(seed);

            if (numSeed != UserManager.userData['nowGalaxy']) {
              list.push([UserManager.getGalaxy(numSeed)]);
              this.seedList.push(numSeed);
            }
          }

          DivBlock.childrenStackSort(listView.node, list.length, listView.node.children[0]);
          DivBlock.render(listView.node, list); // 2. 右侧面板

          var selection = this.listViews[1];
          list = ['数据概览', '星系探索'];
          var keys = UserManager.getGalaxy();

          if (Object.keys(keys).length > 1) {
            list.push('资源转运');
          }

          DivBlock.childrenStackSort(selection.node, list.length, selection.node.children[0]);
          DivBlock.render(selection.node, list);
          this.renderDataBoard();
          this.renderExplore();
          this.renderTransfer(); // [3]
        };

        _proto.selectCurrent = function selectCurrent(event, data) {
          var toggle = this.listViews[0].activeToggles()[0];

          if (toggle) {
            toggle.isChecked = false;
          }

          this.nowOption = -1;
          this.renderDataBoard();
          this.renderTransfer();
        };

        _proto.selectOther = function selectOther(event, data) {
          var toggle = this.listViews[0].activeToggles()[0];

          if (toggle) {
            this.nowOption = this.listViews[0].toggleItems.indexOf(toggle);
          } else {
            this.nowOption = -1;
          }

          this.renderDataBoard();
          this.renderTransfer();
        };

        _proto.renderDataBoard = function renderDataBoard() {
          var board = this.blocks[0].getChildByName('Layout');
          var galaxy = this.currentGalaxy();
          var button = this.blocks[0].getChildByName('Button').getComponent(Button);
          var list = {
            name: galaxy.name,
            starnum: '星球数量: ' + galaxy.planets.length,
            settled: '定居时间: ' + UserManager.getTimeString(galaxy.settleTime),
            pos: UserManager.getPosString(this.nowOption == -1 ? UserManager.userData['nowGalaxy'] : this.seedList[this.nowOption])
          };
          list = DivBlock.render(board, list); // console.log('dataBoard', list);
        };

        _proto.renderExplore = function renderExplore() {
          var _this2 = this;

          var board = this.blocks[1].getChildByName('Layout');
          var button = this.blocks[1].getChildByName('Button').getComponent(Button);
          var galaxy = this.sceneCtrl.getNowGalaxy();
          var list = {
            from_title: "\u5F53\u524D <color=#80C2FF>" + galaxy.name + "</color> \u661F\u7CFB\u8D44\u6E90\u5B58\u91CF\uFF1A",
            from_storage: [],
            condition: [],
            position: []
          }; // 当前星系存量

          var fromStorage = galaxy.resourceSurplus;
          list.from_storage = fromStorage.map(function (value, i) {
            return ["icon_res_" + i, value.toFixed(0)];
          }); // 坐标处理

          var axis = ['X', 'Y', 'Z'];
          axis.forEach(function (value) {
            list.position.push({
              axis: value,
              editbox: 0
            });
          }); // 探索消费

          var cost = UserManager.getExploreCost();
          cost.forEach(function (value, i) {
            if (value != 0) {
              var resName = DataManager.dataAssets['dataSystem']['resName'][i]; // if (facility instanceof Object && facility.broken) cost /= 2

              var ok = _this2.sceneCtrl.getNowGalaxy().resourceSurplus[i] >= value;
              var item = ["<img src=\"icon_res_" + i + "\"/>" + resName, value, ok];
              list.condition.push(item);
            }
          });
          var frs = board.getChildByName('.from_storage');
          var condition = board.getChildByName('.condition');
          var position = board.getChildByName('.position');
          DivBlock.childrenStackSort(frs, list.from_storage.length, frs.children[0]);
          DivBlock.childrenStackSort(condition, list.condition.length, condition.children[0]);
          DivBlock.childrenStackSort(position, list.position.length, position.children[0]);
          list = DivBlock.render(board, list);
          list.position.forEach(function (value, i) {
            _this2.posBox[i] = value['editbox'];
          });
          this.checkExplore();
        };

        _proto.renderTransfer = function renderTransfer() {
          var _this3 = this;

          var board = this.blocks[2].getChildByName('Layout');
          var galaxy = this.sceneCtrl.getNowGalaxy();
          var button = this.blocks[2].getChildByName('Button').getComponent(Button);
          button.interactable = false;
          var keys = UserManager.getGalaxy();
          if (Object.keys(keys).length === 1) return;
          var list = {
            action: '请先选择目标星系',
            cost: '',
            from_title: "<color=#80C2FF>" + galaxy.name + "</color> \u661F\u7CFB\u8D44\u6E90\u5B58\u91CF\uFF1A",
            to_title: '',
            from_storage: [],
            to_storage: [],
            editnum: []
          };
          var fromStorage = galaxy.resourceSurplus;
          list.from_storage = fromStorage.map(function (value, i) {
            return ["icon_res_" + i, value.toFixed(0)];
          });
          var editnum = board.getChildByName('.editnum');
          var frs = board.getChildByName('.from_storage');
          var tos = board.getChildByName('.to_storage');
          DivBlock.childrenStackSort(frs, list.from_storage.length, frs.children[0]);
          editnum.active = tos.active = this.nowOption != -1;

          if (this.nowOption != -1) {
            var targetGalaxy = this.currentGalaxy();
            list.action = "<color=#80C2FF>" + galaxy.name + "</color> \u661F\u7CFB\n\u8F6C\u8FD0\u81F3\n<color=#80C2FF>" + targetGalaxy.name + "</color> \u661F\u7CFB";
            list.cost = '需额外消耗能源 <color=#80FFC2>0</color>'; // 

            list.to_title = "<color=#80C2FF>" + targetGalaxy.name + "</color> \u661F\u7CFB\u4ED3\u5E93\u7A7A\u4F59\uFF1A";
            var storage = targetGalaxy.resourceSurplus;
            var capacity = GalaxyData.getMaxCapacity(targetGalaxy);
            list.to_storage = storage.map(function (value, i) {
              var restCapacity = Math.max(0, capacity[i] - value);
              _this3.transMax[i] = Math.floor(restCapacity);
              return ["icon_res_" + i, restCapacity.toFixed(0)];
            });

            for (var i = 0; i < 3; i++) {
              list.editnum.push(["icon_res_" + i, 0]);
            }

            DivBlock.childrenStackSort(tos, list.to_storage.length, tos.children[0]);
            DivBlock.childrenStackSort(editnum, list.editnum.length, editnum.children[0]);
          }

          list = DivBlock.render(board, list);
          list.editnum.forEach(function (value, i) {
            var node = value.node.getChildByName('.value');
            _this3.resourceBox[i] = node.getComponent(EditBox);
          });
        };

        _proto.getTransferCost = function getTransferCost(res) {
          if (res === void 0) {
            res = [];
          }

          var rate = 0.1; // 转运消耗能源比例，可以科技树降低

          var num = 0;
          res.forEach(function (element) {
            num += Math.ceil(rate * element);
          });
          return num;
        };

        _proto.checkTransfer = function checkTransfer(box, data) {
          var rate = UserManager.techChecked(0, 7) ? 0.05 : 0.1; // 转运消耗能源比例，可以科技树降低

          var board = this.blocks[2].getChildByName('Layout');
          var button = this.blocks[2].getChildByName('Button').getComponent(Button);
          var nowResource = this.sceneCtrl.getNowGalaxy().resourceSurplus;
          var targetGalaxy = this.currentGalaxy();
          var nowValue = Number(box.string);
          var energyCost = 0;
          var index = this.resourceBox.indexOf(box);

          for (var i = 0; i < 3; i++) {
            if (i != index) energyCost += Math.ceil(rate * Number(this.resourceBox[i].string));
          }

          var max = 0; // 算最大转量

          if (index == 0) {
            max = Math.floor((nowResource[0] - energyCost) / (1 + rate));
          } else {
            max = Math.floor(Math.min(nowResource[index], (nowResource[0] - energyCost) / rate));
          } // console.log('maxTrans', max, );
          // 算最大存量


          var storage = targetGalaxy.resourceSurplus;
          var capacity = GalaxyData.getMaxCapacity(targetGalaxy);
          var restCapacity = Math.max(0, capacity[index] - storage[index]); // 更新实际最大值和界面

          max = Math.min(Math.floor(restCapacity), max);
          box.string = Math.max(0, Math.min(nowValue, max)).toFixed(0);
          var cost = this.getTransferCost(this.resourceBox.map(function (box) {
            return Number(box.string);
          }));
          var list = {
            cost: "\u9700\u989D\u5916\u6D88\u8017\u80FD\u6E90 <color=#80FFC2>" + cost + "</color>"
          };
          list = DivBlock.render(board, list);
          button.interactable = cost > 0;
        };

        _proto.callTransfer = function callTransfer(event, data) {
          var res = this.resourceBox.map(function (box) {
            return Number(box.string);
          });
          var cost = this.getTransferCost(res);
          GalaxyData.gainResource(this.currentGalaxy(), res);
          res[0] += cost;
          GalaxyData.gainResource(this.sceneCtrl.getNowGalaxy(), res, true);
          this.setBlock();
        };

        _proto.getExploreSeed = function getExploreSeed() {
          return UserManager.getSeedNumber(this.posBox[0].string, this.posBox[1].string, this.posBox[2].string);
        };

        _proto.checkExplore = function checkExplore(box, data) {
          if (box === void 0) {
            box = null;
          }

          if (box) {
            if (box.string) {
              var num = Number(box.string);

              if (num < 0) {
                box.string = String(-num);
              }
            } else {
              box.string = '0';
            }
          }

          var galaxy = this.sceneCtrl.getNowGalaxy();
          var button = this.blocks[1].getChildByName('Button').getComponent(Button);
          var resEnough = GalaxyData.resourceEnough(galaxy, UserManager.getExploreCost());
          var seedOk = UserManager.checkSeedOk(this.getExploreSeed());
          button.interactable = resEnough && seedOk;
          return button.interactable;
        };

        _proto.callSwitch = function callSwitch(event, data) {
          var seed = this.nowOption == -1 ? UserManager.userData['nowGalaxy'] : this.seedList[this.nowOption]; // console.log('switch', seed, this.nowOption);

          UserManager.userData['nowGalaxy'] = seed;
          this.sceneCtrl.callSwitch();
        };

        _proto.callExplore = function callExplore(event, data) {
          var galaxy = this.sceneCtrl.getNowGalaxy();
          var resEnough = GalaxyData.resourceEnough(galaxy, UserManager.getExploreCost());

          if (this.checkExplore() && resEnough) {
            var seed = this.getExploreSeed();
            GalaxyData.gainResource(galaxy, UserManager.getExploreCost(), true);
            UserManager.registerNewGalaxy(seed);
            this.sceneCtrl.callSwitch();
          }
        };

        _proto.callNameEdit = function callNameEdit(editBox, data) {
          if (editBox.string) {
            this.currentGalaxy().name = editBox.string;
            UserManager.saveData();
            this.setBlock();
          } else {
            editBox.string = this.currentGalaxy().name;
          }
        };

        _proto.currentGalaxy = function currentGalaxy() {
          if (this.nowOption != -1) {
            return UserManager.getGalaxy(this.seedList[this.nowOption]);
          }

          return this.sceneCtrl.getNowGalaxy();
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return SceneTransfer;
      }(DivBlock), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listViews", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefabs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ValueChangeItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UiItem.ts', './DivBlock.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Label, UiItem, DivBlock;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
    }, function (module) {
      UiItem = module.UiItem;
    }, function (module) {
      DivBlock = module.default;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "a08a7AlMIFE9K6keMbSUgik", "ValueChangeItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ValueChangeItem = exports('ValueChangeItem', (_dec = ccclass('ValueChangeItem'), _dec(_class = (_temp = /*#__PURE__*/function (_UiItem) {
        _inheritsLoose(ValueChangeItem, _UiItem);

        function ValueChangeItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UiItem.call.apply(_UiItem, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "arrow", null);

          _defineProperty(_assertThisInitialized(_this), "old", null);

          _defineProperty(_assertThisInitialized(_this), "oldUnit", null);

          return _this;
        }

        var _proto = ValueChangeItem.prototype; // [1]
        // dummy = '';

        _proto.setValue = function setValue(key, newValue, unit, oldValue) {
          if (unit === void 0) {
            unit = '';
          }

          if (oldValue === void 0) {
            oldValue = '';
          }

          if (!this.arrow) {
            this.arrow = this.node.children[0];
            this.old = this.node.getChildByName('.value_old').getComponent(Label);
            this.oldUnit = this.node.getChildByName('.unit_old').getComponent(Label);
          }

          this.arrow.active = !!oldValue;
          var list = {
            key: key,
            value: newValue,
            unit: unit
          };

          if (oldValue) {
            list.value_old = oldValue;
            list.unit_old = unit;
            this.old.node.active = true;
            this.oldUnit.node.active = true;
          } else {
            this.old.node.active = false;
            this.oldUnit.node.active = false;
          }

          DivBlock.render(this.node, list);
        } // [2]
        // @property
        // serializableDummy = 0;
        ;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ValueChangeItem;
      }(UiItem), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DivBlock.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './AudioCtrl.ts', './GameControl.ts', './UiItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Node, UIOpacity, Widget, UITransform, assert, view, v3, Tween, tween, Button, ToggleContainer, instantiate, Layout, Label, RichText, EditBox, ProgressBar, Sprite, Component, AudioCtrl, GameControl, UiItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      UIOpacity = module.UIOpacity;
      Widget = module.Widget;
      UITransform = module.UITransform;
      assert = module.assert;
      view = module.view;
      v3 = module.v3;
      Tween = module.Tween;
      tween = module.tween;
      Button = module.Button;
      ToggleContainer = module.ToggleContainer;
      instantiate = module.instantiate;
      Layout = module.Layout;
      Label = module.Label;
      RichText = module.RichText;
      EditBox = module.EditBox;
      ProgressBar = module.ProgressBar;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      AudioCtrl = module.default;
    }, function (module) {
      GameControl = module.default;
    }, function (module) {
      UiItem = module.UiItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "a3df7Hq+dRF8ZAchtDwvZpr", "DivBlock", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DivBlock = exports('default', (_dec = ccclass('DivBlock'), _dec2 = property({
        tooltip: '收纳的各模块内容。',
        type: [Node]
      }), _dec3 = property({
        tooltip: '从模块递进时，保留显示的内容',
        type: [Node]
      }), _dec4 = property({
        tooltip: '初始渐入第一个模块'
      }), _dec5 = property({
        tooltip: '渐变时间'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DivBlock, _Component);

        function DivBlock() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "blocks", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "subItems", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "firstFadeIn", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "transtionTime", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "stack", []);

          _defineProperty(_assertThisInitialized(_this), "canOperate", true);

          return _this;
        }

        var _proto = DivBlock.prototype;

        _proto.onLoad = function onLoad() {
          //console.log(`节点${this.node.name}读取`);
          this.blocks.forEach(function (node) {
            node.active = false;
            var opacity = node.getComponent(UIOpacity);

            if (!opacity) {
              node.addComponent(UIOpacity); //console.log(node.name+ '已添加UIOpacity组件');
            }

            node.children.forEach(function (child) {
              var opacity = child.getComponent(UIOpacity);
              child.active = false;

              if (!opacity) {
                child.addComponent(UIOpacity); //console.log(child.name+ '已添加UIOpacity组件');
              }
            });
          });
        };

        _proto.start = function start() {
          // [3]
          if (this.firstFadeIn && this.blocks[0]) {
            this.blockEnter(0);
          }
        };

        _proto.setBlock = function setBlock(fromBlock) {}
        /**
         * #zh 激活并播放一个节点的出现动画 
         * 
         * @protected
         * @param node 要做动作的节点
         * @param params 节点进入动作的相关参数
         */
        ;

        _proto.nodeEnter = function nodeEnter(node, params) {
          var widget = node.getComponent(Widget);

          if (widget) {
            widget.updateAlignment();
          }

          var transform = node.getComponent(UITransform);
          var opacity = node.getComponent(UIOpacity);
          assert(transform && opacity, node.name + "节点缺少UItrans组件或者UIopacity组件");
          var w = transform.width;
          var h = transform.height;
          var size = view.getCanvasSize();
          opacity.opacity = 0;
          if (params.sound) AudioCtrl.playSe(params.sound, 1); // 对参数的默认值设置

          params.callback = params.callback ? params.callback : function (node) {};
          var pos = node.position.clone();
          var movePos = v3();
          var dir = Math.sign(pos.x);

          if (Math.abs(pos.x) >= 0.2 * size.width) {
            if (!params.distance) params.distance = w;
            movePos.x = -params.distance * dir;
          } else {
            dir = pos.y >= 0 ? 1 : -1;
            if (!params.distance) params.distance = h;
            movePos.y = -params.distance * dir;
          }

          node.setPosition(node.position.subtract(movePos)); //console.log([node.name, node.position.x, node.position.y]);

          node.active = true; //console.log(`节点${node.name}进入[${pos.x}, ${pos.y}][${movePos.x}, ${movePos.y}]`);

          Tween.stopAllByTarget(opacity);
          tween(node).to(params.time, {
            position: pos
          }, {
            easing: 'cubicOut'
          }).call(params.callback.bind(this)).start();
          tween(opacity).to(params.time, {
            opacity: 255
          }).start();
        }
        /**
         * #zh 播放一个节点的消失动画并取消激活
         * 
         * @protected
         * @param node 要做动作的节点
         * @param params 节点进入动作的相关参数
         */
        ;

        _proto.nodeExit = function nodeExit(node, params) {
          var transform = node.getComponent(UITransform);
          var opacity = node.getComponent(UIOpacity);
          assert(transform && opacity, node.name + "节点缺少UItrans组件或者UIopacity组件");
          var w = transform.width;
          var h = transform.height;
          var size = view.getCanvasSize();
          if (params.sound) AudioCtrl.playSe(params.sound, 1); // 对参数的默认值设置

          params.callback = params.callback ? params.callback : function (node) {};
          var pos = node.position.clone();
          var movePos = v3();
          var dir = Math.sign(pos.x);

          if (Math.abs(pos.x) >= 0.2 * size.width) {
            if (!params.distance) params.distance = w;
            movePos.x = params.distance * dir;
          } else {
            dir = pos.y >= 0 ? 1 : -1;
            if (!params.distance) params.distance = h;
            movePos.y = params.distance * dir;
          } ////console.log([movePos, movePos.negative()]);


          tween(node).by(params.time, {
            position: movePos
          }, {
            easing: 'cubicOut'
          }).by(0, {
            position: movePos.clone().negative()
          }).call(params.callback.bind(this)).start();
          tween(opacity).to(params.time, {
            opacity: 0
          }).call(function (opacity) {
            opacity.node.active = false;
          }).start(); //console.log(`节点${node.name}移出[${node.position.x}, ${node.position.y}][${movePos.x}, ${movePos.y}]`);
        }
        /**
         * 使特定块渐入
         * @protected
         * @param id 块id
         * @param backward 是否是退出某块时操作，退出到该block
         */
        ;

        _proto.blockFadeIn = function blockFadeIn(id, backward) {
          var _this2 = this;

          if (backward === void 0) {
            backward = false;
          }

          var blockNode = this.blocks[id];
          assert(blockNode, "\u8981\u8FDB\u5165\u7684block\u5E8F\u53F7\u51FA\u754C\uFF1A" + id);
          blockNode.active = true;
          var subItems = [];
          var targetBlock = blockNode.getComponent(DivBlock);

          if (targetBlock) {
            //subItems = targetBlock.blocks
            // 回退时：非保留显示内容才需要渐入
            if (backward) subItems = subItems.concat(targetBlock.subItems);
          }

          blockNode.children.forEach(function (node) {
            if (subItems.indexOf(node) === -1) {
              var params = {
                time: _this2.transtionTime
              };

              _this2.nodeEnter(node, params);
            }
          });

          if (targetBlock) {
            targetBlock.setBlock(this);
          } //console.log(`节点${this.node.name}渐入块${blockNode.name}`);

        }
        /**
         * 使特定块渐出
         * @protected
         * @param id 块id
         * @param backward 是否是退出某块时操作，使该block退出
         */
        ;

        _proto.blockFadeOut = function blockFadeOut(id, backward) {
          var _this3 = this;

          if (backward === void 0) {
            backward = false;
          }

          var blockNode = this.blocks[id];
          assert(blockNode, "\u8981\u8FDB\u5165\u7684block\u5E8F\u53F7\u51FA\u754C\uFF1A" + id);
          var subItems = [];
          var targetBlock = blockNode.getComponent(DivBlock);

          if (targetBlock) {
            //subItems = targetBlock.blocks
            // 递进时：非保留显示内容才需要退出
            if (!backward) subItems = subItems.concat(targetBlock.subItems);
          }

          blockNode.children.forEach(function (node) {
            if (subItems.indexOf(node) === -1) {
              var params = {
                time: _this3.transtionTime
              };

              _this3.nodeExit(node, params);
            }
          }); //console.log(`节点${this.node.name}渐出块${blockNode.name}`);
        }
        /**
         * 动画期间暂停操作
         */
        ;

        _proto.pauseOperation = function pauseOperation() {
          var _this4 = this;

          this.canOperate = false;
          tween(this.node).delay(this.transtionTime).call(function () {
            _this4.canOperate = true;
          }).start();
        }
        /**
         * 递进
         * @param id 递进到的id
         */
        ;

        _proto.blockEnter = function blockEnter(id) {
          this.pauseOperation();
          assert(this.stack.indexOf(id) === -1, "\u8FDB\u5165\u7684block\u5E8F\u53F7 " + id + " \u5DF2\u5728\u6808\u4E2D\uFF1A" + this.stack);

          if (this.stack.length > 0) {
            var outId = this.stack[this.stack.length - 1];
            this.blockFadeOut(outId);
          }

          this.blockFadeIn(id);
          this.stack.push(id);
        }
        /**
         * 回退
         */
        ;

        _proto.blockBack = function blockBack() {
          this.pauseOperation();
          assert(this.stack.length > 0, "\u4E0D\u80FD\u5728\u6808\u65E0\u5143\u7D20\u56DE\u9000\uFF1A" + this.stack);
          var outId = this.stack.pop();
          this.blockFadeOut(outId, true);

          if (this.stack.length > 0) {
            var inId = this.stack[this.stack.length - 1];
            this.blockFadeIn(inId, true);
          }
        }
        /**
         * 替换栈最后的块
         * @param id 替换为的id
         */
        ;

        _proto.blockChange = function blockChange(id) {
          this.pauseOperation(); // 栈顶有块则出栈

          if (this.stack.length > 0) {
            var outId = this.stack.pop();

            if (outId == id) {
              this.stack.push(id);
              return;
            }

            this.blockFadeOut(outId, true);
          }

          assert(this.stack.indexOf(id) === -1, "\u8FDB\u5165\u7684block\u5E8F\u53F7 " + id + " \u5DF2\u5728\u6808\u4E2D\uFF1A" + this.stack); // 入栈

          this.blockFadeIn(id);
          this.stack.push(id);
        }
        /**
         * 暂时隐藏块
         * @param id 替换为的id
         */
        ;

        _proto.blockShow = function blockShow() {
          this.pauseOperation(); // 栈顶有块则出栈

          var id = this.stack[this.stack.length - 1];
          this.blockFadeIn(id);
        }
        /**
         * 暂时隐藏块
         * @param id 替换为的id
         */
        ;

        _proto.blockHide = function blockHide() {
          this.pauseOperation(); // 栈顶有块则出栈

          if (this.stack.length > 0) {
            var outId = this.stack[this.stack.length - 1];
            this.blockFadeOut(outId, true);
          }
        }
        /**
         * 一次批量退出块[未实装]
         * @param time 退出次数
         */
        ;

        _proto.blockExit = function blockExit(time) {//blockNode.children.forEach((node: Node) => {
        };

        _proto.blockEnterByButton = function blockEnterByButton(event, data) {
          var id = Number(data);
          if (this.canOperate) this.blockEnter(id);
        };

        _proto.blockBackByButton = function blockBackByButton(event, data) {
          if (this.canOperate) this.blockBack();
        };

        _proto.blockChangeByButton = function blockChangeByButton(event, data) {
          var id = Number(data);
          if (this.canOperate) this.blockChange(id);
        }
        /**
         * [按钮调用]按照ListView里面点的按钮的位置替换块
         * @param event 传入输入事件
         * @param data 填入offset
         */
        ;

        _proto.blockChangeByList = function blockChangeByList(event, data) {
          var _this5 = this;

          var offset = Number(data);
          if (!(offset >= 0)) offset = 0; // <0 和 NaN处理

          var node = event.getCurrentTarget();
          var id = offset + node.getSiblingIndex();
          this.blockChange(id);
          var toggle = node.getComponent(Button);
          var con = node.parent.getComponent(ToggleContainer);

          if (con) {
            Tween.stopAllByTarget(toggle);
            con.toggleItems.forEach(function (toggle) {
              tween(toggle).call(function (toggle) {
                toggle.enabled = false;
              }).delay(_this5.transtionTime).call(function (toggle) {
                toggle.enabled = true;
              }).start();
            });
          }
        };

        DivBlock.childrenStackSort = function childrenStackSort(node, num, model) {
          if (num === void 0) {
            num = 0;
          }

          if (model === void 0) {
            model = null;
          }

          if (!model) model = node.children[0];
          var i = 0;

          for (; i < num; i++) {
            var child = node.children[i];

            if (!child) {
              if (model) {
                child = instantiate(model);
                node.addChild(child);
              } else {
                console.warn('整理子节点未找到模板');
                return;
              }
            }

            child.name = '.' + i;
            child.active = true;
          }

          for (; i < node.children.length; i++) {
            var _child = node.children[i];
            _child.active = false;
          }

          var layout = node.getComponent(Layout);

          if (layout) {
            layout.updateLayout();
            console.log('sort', num, layout);
          } // 刷新widget


          for (i = 0; i < num; i++) {
            var widget = node.children[i].getComponent(Widget);

            if (widget) {
              widget.updateAlignment();
            }
          }
        }
        /**
         * 通过读取子节点名称当作属性名，自动拿label等组件的渲染方法，比一个个拿label在渲染方便多了
         * 注：不支持二维数组
         * @param node 根基节点
         * @param object 递归遍历的属性对象
         * @returns 传入的object的value都会换成指定渲染组件
         */
        ;

        DivBlock.render = function render(node, object) {
          if (object instanceof Array) {
            // 传入了数组属性，一项项找名字为 .index 子节点渲染
            var uiItem = node.getComponent(UiItem); // console.log('.' + key);

            if (uiItem) {
              // 有UiItem组件调用其设置方法，把value数组传参
              uiItem.setValue.apply(uiItem, object);
              return uiItem;
            } else {
              // 没有，按照下标逐个渲染
              for (var i = 0; i < object.length; i++) {
                var element = object[i];
                var son = node.getChildByName('.' + i);
                object[i] = this.renderSingle(son, element);
              } // let layout = node.getComponent(Layout) 
              // if (layout) layout.updateLayout()
              // object.forEach((com) => {
              //     if (com instanceof Component) {
              //         let widget = com.getComponent(Widget)
              //         if (widget) widget.updateAlignment()
              //         console.log('widget', widget, widget?.getComponent(UITransform));
              //     }
              // })


              return object;
            }
          } else {
            for (var key in object) {
              var value = object[key];
              var child = node.getChildByName('.' + key);

              if (value instanceof Object) {
                if (child) {
                  object[key] = DivBlock.render(child, value);
                }
              } else {
                // 对象或字符串
                object[key] = this.renderSingle(child, value);
              }
            }

            return object;
          }
        };

        DivBlock.renderSingle = function renderSingle(node, value) {
          if (node) {
            if (value instanceof Object) {
              return DivBlock.render(node, value);
            } else {
              // 0.divblock
              var block = node.getComponent(DivBlock);
              var label = node.getComponent(Label) || node.getComponent(RichText) || node.getComponent(EditBox);

              if (label) {
                label.string = value;
                return label;
              } // 2.名为value子节点带label


              var valueChild = node.getChildByName('value');

              if (valueChild) {
                // console.log(valueChild);
                label = valueChild.getComponent(Label);

                if (label) {
                  // console.log(label);
                  label.string = value;
                  return label;
                }
              } // 3.progressbar


              var progressbar = node.getComponent(ProgressBar);
              var num = Number(value);

              if (progressbar && value != NaN) {
                progressbar.progress = num;
                return progressbar;
              } // 4.sprite换图集


              var sprite = node.getComponent(Sprite);

              if (sprite) {
                var image = GameControl.instance.atlasAssets[0].getSpriteFrame(value);

                if (image) {
                  sprite.spriteFrame = image;
                } else {
                  console.warn('iconset找不到spriteFrame: ', GameControl.instance.atlasAssets[0], value);
                }

                return sprite;
              }
            }
          }

          console.warn('未能成功渲染', node, value);
          return value;
        };

        DivBlock.renderListView = function renderListView(node, list, prefab) {
          if (prefab === void 0) {
            prefab = null;
          }

          prefab = prefab ? prefab : node.children[0];
          DivBlock.childrenStackSort(node, list.length, prefab);
          DivBlock.render(node, list);
        }
        /**
         * 快捷操作：选中ToggleContainer的一个toggle
         * @param container 
         * @param option 所选项，-1为取消当前选中
         * @param noCallback 不回调
         * @returns 选中的toggle
         */
        ;

        DivBlock.selectListView = function selectListView(container, option, noCallback) {
          if (option === void 0) {
            option = -1;
          }

          if (noCallback === void 0) {
            noCallback = false;
          }

          if (option >= 0) {
            var toggle = container.toggleItems[option];

            if (toggle) {
              if (noCallback) {
                toggle.setIsCheckedWithoutNotify(true);
              } else {
                toggle.isChecked = true;
              }

              return toggle;
            } else {
              console.warn('设定的ListView没有特定选项', container, option);
            }
          } else {
            var _toggle = container.activeToggles()[0];

            if (_toggle) {
              if (noCallback) {
                _toggle.setIsCheckedWithoutNotify(false);
              } else {
                _toggle.isChecked = false;
              }
            }

            return false;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return DivBlock;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blocks", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "subItems", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "firstFadeIn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "transtionTime", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DemandItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UiItem.ts', './DivBlock.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, UiItem, DivBlock;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      UiItem = module.UiItem;
    }, function (module) {
      DivBlock = module.default;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "ad771uHkU9Ie6kqIUGtIKpk", "DemandItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DemandItem = exports('DemandItem', (_dec = ccclass('DemandItem'), _dec(_class = (_temp = /*#__PURE__*/function (_UiItem) {
        _inheritsLoose(DemandItem, _UiItem);

        function DemandItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UiItem.call.apply(_UiItem, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "key", null);

          _defineProperty(_assertThisInitialized(_this), "value", null);

          _defineProperty(_assertThisInitialized(_this), "icon", null);

          return _this;
        }

        var _proto = DemandItem.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.setValue = function setValue(key, value, ok) {
          if (ok === void 0) {
            ok = false;
          }

          var list = {
            key: key,
            value: value
          };
          var icon = this.node.getChildByName('.icon');

          if (ok != null) {
            list.icon = 'judge_' + ok;
          }

          icon.active = ok != null;
          DivBlock.render(this.node, list);
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return DemandItem;
      }(UiItem), _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Dialogue.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, Label, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "c12ffm5DVtDNZZjvi1e8EY3", "Dialogue", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Dialogue = exports('default', (_dec = ccclass('Dialogue'), _dec2 = property({
        tooltip: "对话内容和点击继续节点",
        type: [Label]
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Dialogue, _Component);

        function Dialogue() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "contents", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "targetNode", null);

          return _this;
        }

        var _proto = Dialogue.prototype;

        _proto.start = function start() {};

        _proto.setDialog = function setDialog(node, string, params) {//this.targetNode = node
        };

        _proto.close = function close() {//this.node.destroy();
        };

        _proto.update = function update(dt) {//let pos = this.targetNode.convertToWorldSpaceAR(cc.v2(0, this.targetNode.height * (1 - this.targetNode.anchorY) * Math.abs(this.targetNode.scaleY)))
          //let cameraPos = LevelManager.controlCom.cameraControl.node.position
          //this.node.setPosition(pos.subtract(cc.v2(cameraPos.x + cc.winSize.width / 2, cameraPos.y + cc.winSize.height / 2)))
        };

        return Dialogue;
      }(Component), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "contents", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // // Learn TypeScript:
      // //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
      // // Learn Attribute:
      // //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
      // // Learn life-cycle callbacks:
      // //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
      // 
      // import Utils, { AudioCtrl, LevelManager } from "../base/GameCore";
      // const {ccclass, property} = cc._decorator;
      // 
      // @ccclass
      // export default class Dialogue extends cc.Component {
      // 
      //     @property({
      //         tooltip: "对话内容和点击继续节点",
      //         type: [cc.Label]
      //     })
      //     contents: cc.Label[] = []
      // 
      //     // LIFE-CYCLE CALLBACKS:
      // 
      //     // onLoad () {}
      //     targetNode: cc.Node = null
      // 
      //     start () {
      // 
      //     }
      // 
      //     setDialog (node: cc.Node, string: string, params = {}) {
      //         this.targetNode = node
      //         // 节点的缩放情况变化时，使得节点始终为正常缩放
      //         //this.update(0.013);
      //         // let num = Utils.randInt(3) + 1;
      //         // if (string.length >= 40) {
      //         //     AudioCtrl.playSe("crazydaveextralong" + num, 1);
      //         // } else if (string.length >= 20) {
      //         //     AudioCtrl.playSe("crazydavelong" + num, 1);
      //         // } else {
      //         //     AudioCtrl.playSe("crazydaveshort" + num, 1);
      //         // }
      //         this.contents[0].string = string
      //         this.update(0.013)
      //         
      //     }
      // 
      // 
      //     close () {
      //         this.node.destroy();
      //     }
      // 
      //     update (dt) {
      //         let pos = this.targetNode.convertToWorldSpaceAR(cc.v2(0, this.targetNode.height * (1 - this.targetNode.anchorY) * Math.abs(this.targetNode.scaleY)))
      //         let cameraPos = LevelManager.controlCom.cameraControl.node.position
      //         this.node.setPosition(pos.subtract(cc.v2(cameraPos.x + cc.winSize.width / 2, cameraPos.y + cc.winSize.height / 2)))
      //     }
      // }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneTechTree.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './UserManager.ts', './AudioCtrl.ts', './DivBlock.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _defineProperty, cclegacy, _decorator, SpriteFrame, Node, Button, UITransform, ToggleContainer, Graphics, instantiate, Sprite, Label, Vec3, color, DataManager, UserManager, AudioCtrl, DivBlock;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Button = module.Button;
      UITransform = module.UITransform;
      ToggleContainer = module.ToggleContainer;
      Graphics = module.Graphics;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Label = module.Label;
      Vec3 = module.Vec3;
      color = module.color;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      UserManager = module.default;
    }, function (module) {
      AudioCtrl = module.default;
    }, function (module) {
      DivBlock = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "cc32ae4iWRCbpNIabux8iPV", "SceneTechTree", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SceneTechTree = exports('SceneTechTree', (_dec = ccclass('SceneTechTree'), _dec2 = property({
        type: [SpriteFrame],
        tooltip: '按钮图片'
      }), _dec3 = property({
        type: Node,
        tooltip: 'itemContent'
      }), _dec4 = property({
        type: Node,
        tooltip: 'itemContent'
      }), _dec5 = property({
        type: Button,
        tooltip: '研究按钮'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_DivBlock) {
        _inheritsLoose(SceneTechTree, _DivBlock);

        function SceneTechTree() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _DivBlock.call.apply(_DivBlock, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "buttonImages", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "itemContent", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "layoutContent", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "resButton", _descriptor4, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "techRefer", []);

          _defineProperty(_assertThisInitialized(_this), "sceneCtrl", null);

          _defineProperty(_assertThisInitialized(_this), "nowRefer", []);

          return _this;
        }

        var _proto = SceneTechTree.prototype; // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {
          _DivBlock.prototype.start.call(this); // [3]

        };

        _proto.setBlock = function setBlock(from) {
          var _this2 = this;

          if (from === void 0) {
            from = null;
          }

          if (from) {
            this.sceneCtrl = from;
            this.sceneCtrl.manager.requestRunning(false);
            this.sceneCtrl.manager.hideGalaxy();
          }

          var height = this.itemContent.getComponent(UITransform).height;
          var data = DataManager.dataAssets['dataTechTree'];
          var toggleContainer = this.itemContent.children[0].getComponent(ToggleContainer);
          var g = toggleContainer.getComponent(Graphics);
          g.clear();
          var maxDepth = 0;
          this.techRefer = [];
          data.forEach(function (branch, i) {
            var depth = 0;

            for (var j = 0; j < branch.length; j++) {
              var item = branch[j];

              if (UserManager.canSetTech(i, j)) {
                _this2.setSingle(item, i, j, _this2.techRefer.length);

                depth = j % 5 + 1;

                _this2.techRefer.push([i, j]);

                if (depth > maxDepth) {
                  maxDepth = depth;
                }
              }
            }
          });
          this.itemContent.getComponent(UITransform).width = maxDepth * 200 - 40;
          var list = [this.sceneCtrl.getNowGalaxy(), 2];
          DivBlock.render(this.node.children[2], list);

          if (from) {
            DivBlock.selectListView(toggleContainer, -1, true);
            this.setBoard();
          }
        };

        _proto.setSingle = function setSingle(item, i, j, counter) {
          var buttonContainer = this.itemContent.children[0];
          var labelContainer = this.itemContent.children[1];
          var g = buttonContainer.getComponent(Graphics);
          var x = j % 5 * 200;
          var y = i * 216 + Math.floor(j / 5) * 73;
          var buttonNode = buttonContainer.children[counter] ? buttonContainer.children[counter] : instantiate(buttonContainer.children[0]);
          var labelNode = labelContainer.children[counter] ? labelContainer.children[counter] : instantiate(labelContainer.children[0]);
          var sprite = buttonNode.getComponent(Sprite);
          var label = labelNode.getComponent(Label);
          label.string = item.name;
          var pos = new Vec3(x + 80, 648 - y - 20, 0);
          var checked = UserManager.techChecked(i, j);
          g.strokeColor.fromHEX(checked ? '#66ff66' : '#669966');
          sprite.spriteFrame = checked ? this.buttonImages[1] : this.buttonImages[0];

          if (j >= 1 && j < 5) {
            g.moveTo(x, pos.y);
            g.lineTo(x - 40, pos.y);
          } else if (j >= 5) {
            g.moveTo(pos.x, 648 - y);
            g.lineTo(pos.x, 648 - y + 35);
          }

          g.stroke(); // console.log(pos, i, j);

          buttonNode.setPosition(pos);
          labelNode.setPosition(pos);
          buttonContainer.addChild(buttonNode);
          labelContainer.addChild(labelNode);
        };

        _proto.setBoard = function setBoard(refer) {
          if (refer === void 0) {
            refer = null;
          }

          this.nowRefer = refer ? refer : [];
          var list = {
            name: '科技研发',
            state: '',
            requirement: '请于左侧选择研发项目',
            description: '科学技术是第一生产力。\n宇宙的探索程度实际上是科技发展水平的体现，没有高等科技支撑的宇宙探索谈不上是摸鱼。',
            // todo: 把这段正常的文案改中二点。。。
            condition: []
          };
          var ok = [false, false];
          var buttonActive = false;
          var stateColor = '#ff9999';

          if (refer) {
            var data = DataManager.dataAssets['dataTechTree'][refer[0]][refer[1]];
            list.name = data.name;
            list.description = data.description;
            list.requirement = '研发条件';
            ok[0] = this.sceneCtrl.getNowGalaxy().resourceSurplus[2] >= data.cost;
            var item = ["<img src=\"icon_res_2\"/>" + DataManager.dataAssets['dataSystem']['resName'][2], data.cost, ok[0]];
            list.condition.push(item);

            if (refer[1] != 0) {
              // 前置科技
              var demand = refer[1] < 5 ? refer[1] - 1 : refer[1] % 5;
              ok[1] = UserManager.canSetTech(refer[0], refer[1]);
              var name = DataManager.dataAssets['dataTechTree'][refer[0]][demand].name;
              list.condition.push(["\u524D\u7F6E\u79D1\u6280 <color=#acdaff>" + name + "</color>", '', ok[1]]);
            } else {
              ok[1] = true;
            }

            if (UserManager.techChecked(refer[0], refer[1])) {
              // 已研发
              list.state = '已研发';
              stateColor = '#99ff99';
            } else {
              list.state = '未研发';
              buttonActive = true;
              this.resButton.interactable = ok[0] && ok[1];
            }
          }

          var condition = this.layoutContent.getChildByName('.condition');
          DivBlock.childrenStackSort(condition, list.condition.length);
          list = DivBlock.render(this.layoutContent, list);
          var label = list.state;
          label.color = color(stateColor);
          this.resButton.node.active = buttonActive;
        };

        _proto.checkSelect = function checkSelect(toggle, data) {
          if (!this.canOperate) return;
          var index = toggle.node.getSiblingIndex();
          var refer = this.techRefer[index];

          if (toggle.isChecked) {
            this.setBoard(refer);
          } else {
            var container = toggle.node.parent.getComponent(ToggleContainer);

            if (!container.anyTogglesChecked()) {
              this.setBoard();
            }
          }
        };

        _proto.callResearch = function callResearch(event, data) {
          if (this.nowRefer.length > 0) {
            var _data = DataManager.dataAssets['dataTechTree'][this.nowRefer[0]][this.nowRefer[1]];
            var galaxy = this.sceneCtrl.getNowGalaxy();

            if (galaxy.resourceSurplus[2] >= _data.cost && UserManager.canSetTech(this.nowRefer[0], this.nowRefer[1])) {
              galaxy.resourceSurplus[2] -= _data.cost;
              UserManager.userData['techChecked'][this.nowRefer[0]].push(this.nowRefer[1]);
              AudioCtrl.playSet('decision');
              this.setBlock();
              this.setBoard(this.nowRefer);
            }
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return SceneTechTree;
      }(DivBlock), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttonImages", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layoutContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "resButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioCtrl.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './UserManager.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, AudioClip, DataManager, UserManager;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      UserManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d28b8mDClRHY7ilXqWKcwBy", "AudioCtrl", undefined);
      /** 
       * !#zh 音乐音效播放管理器，所有音乐音效播放工作都在这里进行，受设置音量统一控制。 
       * @class AudioCtrl 
       * @static
       */


      var AudioCtrl = exports('default', /*#__PURE__*/function () {
        function AudioCtrl() {}

        AudioCtrl.setBundle = function setBundle(musicSource, soundSource, bundle) {
          AudioCtrl.musicSource = musicSource;
          AudioCtrl.soundSource = soundSource;
          AudioCtrl.bundle = bundle; // 读取预置se

          for (var key in DataManager.dataAssets['dataSystem']['se']) {
            var element = DataManager.dataAssets['dataSystem']['se'][key];

            if (element) {
              AudioCtrl.bundle.load('se/' + element, AudioClip);
            }
          }
        }
        /** 
         * !#zh 播放背景音乐，文件放在audio/bgm下。 
         * @method PlayBgm 
         * @param {String | AudioClip} name 音乐的名称或者Audioclip资源
         * @param {Number} volume 音乐的音量
         * @example 
         * playBgm('backgroundmusic', 1); 
         */
        ;

        return AudioCtrl;
      }());

      _defineProperty(AudioCtrl, "bgmVolume", 0);

      _defineProperty(AudioCtrl, "bgsVolume", 0);

      _defineProperty(AudioCtrl, "bundle", null);

      _defineProperty(AudioCtrl, "musicSource", null);

      _defineProperty(AudioCtrl, "soundSource", null);

      _defineProperty(AudioCtrl, "playBgm", function (name, volume) {
        if (volume === void 0) {
          volume = 1;
        }

        if (!AudioCtrl.bundle) return;
        var realVolume = volume * AudioCtrl.musicVolume();

        if (typeof name == 'string') {
          if (name && AudioCtrl.musicSource.clip && AudioCtrl.musicSource.clip.name === name) {
            // 正在播放当前音乐的情况
            AudioCtrl.adjustMusicVolume();
          } else {
            // 无音乐播放，或当前播放的不是当前音乐
            AudioCtrl.musicSource.stop();
            AudioCtrl.bundle.load('bgm/' + name, AudioClip, function (err, clip) {
              AudioCtrl.musicSource.clip = clip;
              AudioCtrl.musicSource.volume = realVolume;
              AudioCtrl.musicSource.play();
            });
          }
        } else {
          if (AudioCtrl.musicSource.clip == name) {
            // 正在播放当前音乐的情况
            AudioCtrl.adjustMusicVolume();
          } else {
            // 无音乐播放，或当前播放的不是当前音乐
            AudioCtrl.musicSource.stop();
            AudioCtrl.musicSource.clip = name;
            AudioCtrl.musicSource.volume = realVolume;
            AudioCtrl.musicSource.play();
          }
        }

        AudioCtrl.bgmVolume = volume;
      });

      _defineProperty(AudioCtrl, "playSe", function (name, volume) {
        if (volume === void 0) {
          volume = 1;
        }

        if (!AudioCtrl.bundle) return;
        var realVolume = volume * AudioCtrl.soundVolume();

        if (typeof name == 'string') {
          AudioCtrl.bundle.load('se/' + name, AudioClip, function (err, clip) {
            AudioCtrl.soundSource.playOneShot(clip, realVolume);
          }.bind(AudioCtrl));
        } else {
          AudioCtrl.soundSource.playOneShot(name, realVolume);
        }
      });

      _defineProperty(AudioCtrl, "playSet", function (se) {
        var seName = DataManager.dataAssets['dataSystem']["se"][se];

        if (seName) {
          AudioCtrl.playSe(seName, 1);
        } else {
          throw new Error("找不到 " + se + 'SE');
        }
      });

      _defineProperty(AudioCtrl, "adjustMusicVolume", function () {
        if (AudioCtrl.musicSource.clip) {
          AudioCtrl.musicSource.volume = AudioCtrl.bgmVolume * AudioCtrl.musicVolume();
        }
      });

      _defineProperty(AudioCtrl, "adjustSoundVolume", function () {// if (AudioCtrl.playingBGS[0]) {
        //     audioEngine.setVolume(AudioCtrl.playingBGS[1], AudioCtrl.playingBGS[2] * AudioCtrl.soundVolume())
        // }
      });

      _defineProperty(AudioCtrl, "musicVolume", function () {
        return UserManager.getUserSettings('mute') ? 0 : UserManager.getUserSettings('musicVolume');
      });

      _defineProperty(AudioCtrl, "soundVolume", function () {
        return UserManager.getUserSettings('mute') ? 0 : UserManager.getUserSettings('soundVolume');
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Utils.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d4d70mlDQlHYbO5GCK7+eQb", "Utils", undefined);

      var Utils = exports('default', /*#__PURE__*/function () {
        function Utils() {}
        /**
         * 生成一个范围在(0, max-1)内的整数.
         *
         * @static
         * @method randInt
         * @param max 数上限（不包括）
         * @return 一个随机整数
         */

        /**
         * 删除数组第一个出现的元素
         * @param arr 数组
         * @param val 元素
         */


        Utils["delete"] = function _delete(arr, val) {
          var index = arr.indexOf(val);

          if (index > -1) {
            arr.splice(index, 1);
          }
        }
        /**
         * 按条件删除数组中所有元素
         * @static
         * @param array 要操作的数组
         * @param condition 条件函数
         * @param target 调用函数的对象
         */
        ;

        Utils.cleanArray = function cleanArray(array, condition, target) {// for (let i = 0; i < array.length; i++) {
        }
        /**
         * 从数组随机取出元素
         * @static
         * @param arr 数组
         * @param count 取出元素数目
         */
        ;

        Utils.getRandomArrayElements = function getRandomArrayElements(arr, count) {
          var shuffled = arr.slice(0),
              i = arr.length,
              min = i - count,
              temp,
              index;

          while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
          }

          return shuffled.slice(min);
        };

        return Utils;
      }());

      _defineProperty(Utils, "randInt", function (max) {
        return Math.floor(max * Math.random());
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FacilityData.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './GalaxyData.ts', './UserManager.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, DataManager, GalaxyData, UserManager;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      GalaxyData = module.default;
    }, function (module) {
      UserManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e2a15v3YotMTab2nc7BGK+m", "FacilityData", undefined);
      /** 
       * !#zh 行星数据对象。 
       * @class FacilityData 
       */


      var FacilityData = exports('default', /*#__PURE__*/function () {
        //0级表示建筑未建造
        FacilityData.energyPerLevel = function energyPerLevel() {
          return UserManager.techChecked(0, 2) ? 5 : 3.75;
        }
        /**
         * 根据类型生成新建筑
         * @param type 类型id
         */
        ;

        function FacilityData(type, level) {
          if (level === void 0) {
            level = 1;
          }

          _defineProperty(this, "type", 0);

          _defineProperty(this, "level", 1);

          _defineProperty(this, "broken", false);

          _defineProperty(this, "running", true);

          this.type = type;
          this.level = level; // this.name = DataManager.dataAssets['dataFacility'][this.type]['name'];
          // this.cost = DataManager.dataAssets['dataFacility'][this.type]['cost'][0];
          //如果是基地
          // if(this.type == 0) {
          //     this.capacity = DataManager.dataAssets['dataFacility'][this.type]['capacity'][0];
          // }else {
          //     this.capacity = DataManager.dataAssets['dataFacility'][this.type]['capacity'];
          // }
        } // 注意这个只是生成一个存储的对象当字典用，不要写函数
        // 这是因为存档的数据是读localstorage的json转换来的，对象没有函数
        // 需要写函数，写成静态的，请仿照如下写：

        /**
         * 得到建筑升级的花销
         * @param data 建筑数据
         * @returns cost: number[][] = [[],[],[]]//0(没有),1,2三个等级，每个等级对应三种矿 0能源；1红矿；2铝矿；
         * @example cost = FacilityData.getUpgradeCost(facility)
         */


        FacilityData.getUpgradeCost = function getUpgradeCost(data, level) {
          if (level === void 0) {
            level = 1;
          }

          var dataFacility = DataManager.dataAssets['dataFacility'];

          if (data instanceof Object) {
            return dataFacility[data.type]['cost'][data.level];
          } else {
            var _ret = function () {
              // 建造新建筑直接到x级，是各级花费的和
              var result = [0, 0, 0];

              for (var i = 0; i < level; i++) {
                var cost = dataFacility[data]['cost'][i];
                cost.forEach(function (num, j) {
                  result[j] += num;
                });
              }

              return {
                v: result
              };
            }();

            if (typeof _ret === "object") return _ret.v;
          }
        }
        /**
         * 得到降级的返回资源数量
         * @param data 设施
         * @param level 
         * @returns 
         */
        ;

        FacilityData.getDegradeReturn = function getDegradeReturn(data, level) {
          if (level === void 0) {
            level = 1;
          }

          var dataFacility = DataManager.dataAssets['dataFacility'];
          var rate = UserManager.techChecked(1, 2) ? 0.8 : 0.5;
          var type = data instanceof Object ? data.type : data;
          level = data instanceof Object ? data.level : level; // 升到本级花费*50%

          var cost = dataFacility[type]['cost'][level - 1];
          return cost.map(function (num, j) {
            return num * rate;
          }); // if (data instanceof Object) {
          //     return dataFacility[data.type]['cost']![data.level]
          // } else {
          //     return result
          // }
        }
        /**
         * 得到拆除的返回资源数量
         * @param data 设施
         * @param level 
         * @returns 
         */
        ;

        FacilityData.getRemoveReturn = function getRemoveReturn(data, level) {
          if (level === void 0) {
            level = 1;
          }

          var dataFacility = DataManager.dataAssets['dataFacility'];
          var rate = UserManager.techChecked(1, 2) ? 0.8 : 0.5;
          var type = data instanceof Object ? data.type : data;
          level = data instanceof Object ? data.level : level; // 升到本级花费*50%

          var result = [0, 0, 0];

          for (var i = 0; i < level; i++) {
            var cost = dataFacility[type]['cost'][i];
            cost.forEach(function (num, j) {
              result[j] += num * rate;
            });
          }

          return result; // if (data instanceof Object) {
          //     return dataFacility[data.type]['cost']![data.level]
          // } else {
          //     return result
          // }
        }
        /**
         * 得到建筑损坏的维修费用，默认为总投资50%
         * @param data 
         * @param level 
         * @returns [res0,res1,res2]
         */
        ;

        FacilityData.getFixCost = function getFixCost(data, level) {
          if (level === void 0) {
            level = 1;
          }

          var dataFacility = DataManager.dataAssets['dataFacility'];
          var rate = UserManager.techChecked(2, 2) ? 0.2 : 0.5;
          var type = data instanceof Object ? data.type : data;
          level = data instanceof Object ? data.level : level; // 建筑总投资*50%

          var result = [0, 0, 0];

          for (var i = 0; i < level; i++) {
            var cost = dataFacility[type]['cost'][i];
            cost.forEach(function (num, j) {
              result[j] += num * rate;
            });
          }

          return result; // if (data instanceof Object) {
          //     return dataFacility[data.type]['cost']![data.level]
          // } else {
          //     return result
          // }
        };

        FacilityData.getFacilityName = function getFacilityName(data, level) {
          if (level === void 0) {
            level = 1;
          }

          var type = data instanceof Object ? data.type : data;
          level = data instanceof Object ? data.level : level;
          var facilityData = DataManager.dataAssets['dataFacility'][type];
          var oriName = facilityData.name;

          if (facilityData['cost'].length > 1) {
            // 满级不是一级的建筑，加一下罗马后缀
            oriName += ' ' + 'I'.repeat(level);
          }

          return oriName;
        }
        /**
         * 返回建筑运行状态
         * @param galaxy 
         * @param data 
         * @returns 0正常，1低耗，2停止，3损坏
         */
        ;

        FacilityData.getState = function getState(galaxy, data) {
          if (data.broken) {
            return 3;
          } else if (!data.running) {
            return 0;
          } else {
            return GalaxyData.getState(galaxy) == 2 && data.type >= 2 && data.type <= 4 ? 1 : 0;
          }
        }
        /**
         * 返回建筑运行状态的文本
         * @param galaxy 
         * @param data 
         * @returns 0正常，1低耗，2停止，3损坏
         */
        ;

        FacilityData.getStateString = function getStateString(galaxy, data) {
          var str = ['正常', '低耗', '暂停', '损坏'];
          return str[FacilityData.getState(galaxy, data)];
        };

        FacilityData.hasUpgradeTech = function hasUpgradeTech(data, level) {
          if (level === void 0) {
            level = 1;
          }

          var type = data instanceof Object ? data.type : data;
          level = data instanceof Object ? data.level : level;

          switch (type) {
            case 0:
              // 基地
              return level <= 2 || UserManager.techChecked(1, 3);

            case 4:
              // 行星防御系统
              return UserManager.techChecked(2, 3);

            case 5:
              // 戴森球
              return UserManager.techChecked(0, 3);

            default:
              switch (level) {
                case 1:
                  return UserManager.techChecked(type - 1, 1);

                case 2:
                  return UserManager.techChecked(type - 1, 6);

                default:
                  return true;
              }

          }
        };

        FacilityData.getMinLevel = function getMinLevel(planet, type) {
          if (type >= 1 && type <= 3) {
            return planet.hard[type - 1] + 1;
          } else {
            return 1;
          }
        } // static canUpdate

        /**
         * 得到建筑存储量
         * @param data 建筑数据
         * @returns capacity: number[] = []//三个等级，每个等级对应三种矿
         */
        ;

        FacilityData.getCapacity = function getCapacity(data, level) {
          if (level === void 0) {
            level = 1;
          }

          var type = data instanceof Object ? data.type : data;
          level = data instanceof Object ? data.level : level;
          var facilityData = DataManager.dataAssets['dataFacility'][type];

          if (facilityData.hasOwnProperty('capacity')) {
            return facilityData['capacity'][level - 1];
          }

          return [0, 0, 0];
        };

        return FacilityData;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraCtrl.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UserManager.ts', './GalaxyManager.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _defineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, RigidBody, systemEvent, SystemEventType, Vec2, find, macro, ToggleContainer, Component, UserManager, GalaxyManager;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _defineProperty = module.defineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      RigidBody = module.RigidBody;
      systemEvent = module.systemEvent;
      SystemEventType = module.SystemEventType;
      Vec2 = module.Vec2;
      find = module.find;
      macro = module.macro;
      ToggleContainer = module.ToggleContainer;
      Component = module.Component;
    }, function (module) {
      UserManager = module.default;
    }, function (module) {
      GalaxyManager = module.default;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "e87ccmHB/dHKaFFj+u3apVf", "CameraCtrl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var CamaraCtrl = exports('CamaraCtrl', (_dec = ccclass('CamaraCtrl'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CamaraCtrl, _Component);

        function CamaraCtrl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "touchesAbs", 0);

          return _this;
        }

        var _proto = CamaraCtrl.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          var lv = new Vec3(0, 0, 0);
          var rb = this.node.getComponent(RigidBody); // systemEvent.on(Node.EventType.MOUSE_DOWN, (e: EventMouse) => {
          //     console.log('鼠标按下233');
          //     this.isMouseDown = true;
          // }, this);
          // // 鼠标松开
          // systemEvent.on(Node.EventType.MOUSE_DOWN, (e: EventMouse) => {
          //     // console.log('鼠标松开1');
          //     this.isMouseDown = false;
          // }, this);
          // 检测手指数量

          systemEvent.on(SystemEventType.TOUCH_START, function (touch, ev) {
            var touches = ev.getAllTouches();
            var touchNum = touches.length;
            console.log(touchNum);

            if (touchNum === 2) {
              var touchPoint1 = touches[0].getLocation();
              var touchPoint2 = touches[1].getLocation();
              _this2.touchesAbs = Vec2.distance(touchPoint1, touchPoint2);
            }
          }, this); // 鼠标移动

          systemEvent.on(SystemEventType.TOUCH_MOVE, function (touch, ev) {
            // if (!this.isMouseDown) return;
            // console.log('鼠标移动1');
            var touches = ev.getAllTouches();
            var touchNum = touches.length; // console.log(touchNum);

            if (touchNum === 1) {
              var delta = touch.getDelta();
              var av = new Vec3(0, 0, 0);

              var _rb = _this2.node.getComponent(RigidBody);

              var angle_speed = 0.02;
              _rb === null || _rb === void 0 ? void 0 : _rb.getAngularVelocity(av); // 左右视角移动

              if (delta.x < 0) {
                av.y = -angle_speed * Math.pow(-delta.x, 1.5);
              } else if (delta.x > 0) {
                av.y = angle_speed * Math.pow(delta.x, 1.5);
              } // 上下视角移动


              if (delta.y > 0) {
                //向上
                av.x = angle_speed * Math.pow(delta.y, 1.5);
              } else if (delta.y < 0) {
                // 向下
                av.x = -angle_speed * Math.pow(-delta.y, 1.5);
              }

              av.z = 0;
              _rb === null || _rb === void 0 ? void 0 : _rb.setAngularVelocity(av);
              var angle = _this2.node.eulerAngles;
              var angleX = angle.x; // if (angleX > 80)
              //     angleX = 80;
              // if (angleX < -80)
              //     angleX = -80;

              _this2.node.eulerAngles = new Vec3(angleX, angle.y, 0);
            } else if (touchNum === 2) {
              var touchPoint1 = touches[0].getLocation();
              var touchPoint2 = touches[1].getLocation(); // this.touchesAbs = Vec2.distance(touchPoint1, touchPoint2);

              var newTouchesAbs;
              newTouchesAbs = Vec2.distance(touchPoint1, touchPoint2); // let forward_speed = 4;
              // 移动端捏合移动摄像机速度 随当前星系大小改变

              var seed = UserManager.userData['nowGalaxy'];
              var galaxyNode = find('Galaxy');
              var galaxyObject = galaxyNode === null || galaxyNode === void 0 ? void 0 : galaxyNode.getComponent(GalaxyManager);
              var i = (galaxyObject === null || galaxyObject === void 0 ? void 0 : galaxyObject.galaxies[seed].planets.length) - 1;
              var forward_speed = (galaxyObject === null || galaxyObject === void 0 ? void 0 : galaxyObject.galaxies[seed].planets[i].orbitalRadius) / 10;
              rb === null || rb === void 0 ? void 0 : rb.getLinearVelocity(lv);

              if (newTouchesAbs > _this2.touchesAbs) {
                lv.z = forward_speed;
              } else if (newTouchesAbs < _this2.touchesAbs) {
                lv.z = -forward_speed;
              }

              lv.x = 0;
              lv.y = 0;
              Vec3.transformQuat(lv, lv, _this2.node.getRotation());
              rb === null || rb === void 0 ? void 0 : rb.setLinearVelocity(lv);
              _this2.touchesAbs = newTouchesAbs;
            }
          }, this); // 键盘移动

          systemEvent.on(SystemEventType.KEY_DOWN, function (event) {
            // let delta = touch.getDelta();
            var delta = new Vec2(10, 10);
            var av = new Vec3(0, 0, 0);

            var rb = _this2.node.getComponent(RigidBody);

            var angle_speed = 0.02;
            rb === null || rb === void 0 ? void 0 : rb.getAngularVelocity(av); //上下移动

            switch (event.keyCode) {
              //W
              case macro.KEY.w:
                {
                  av.x = -angle_speed * Math.pow(delta.y, 1.5);
                  break;
                }
              //S

              case macro.KEY.s:
                {
                  av.x = angle_speed * Math.pow(delta.y, 1.5);
                  break;
                }
            } //左右移动


            switch (event.keyCode) {
              //A
              case macro.KEY.a:
                {
                  av.y = angle_speed * Math.pow(delta.x, 1.5);
                  break;
                }
              //D

              case macro.KEY.d:
                {
                  av.y = -angle_speed * Math.pow(delta.x, 1.5);
                  break;
                }
            } //45°移动


            switch (event.keyCode) {
              //Q
              case macro.KEY.q:
                {
                  av.x = -angle_speed * Math.pow(delta.y, 1.5);
                  av.y = angle_speed * Math.pow(delta.x, 1.5);
                  break;
                }
              //E

              case macro.KEY.e:
                {
                  av.x = -angle_speed * Math.pow(delta.y, 1.5);
                  av.y = -angle_speed * Math.pow(delta.x, 1.5);
                  break;
                }
              //Z

              case macro.KEY.z:
                {
                  av.x = angle_speed * Math.pow(delta.y, 1.5);
                  av.y = angle_speed * Math.pow(delta.x, 1.5);
                  break;
                }
              //X

              case macro.KEY.x:
                {
                  av.x = angle_speed * Math.pow(delta.y, 1.5);
                  av.y = -angle_speed * Math.pow(delta.x, 1.5);
                  break;
                }
            }

            av.z = 0;
            rb === null || rb === void 0 ? void 0 : rb.setAngularVelocity(av);
            var angle = _this2.node.eulerAngles;
            var angleX = angle.x; // if (angleX > 80)
            //     angleX = 80;
            // if (angleX < -80)
            //     angleX = -80;

            _this2.node.eulerAngles = new Vec3(angleX, angle.y, 0);
          }, this); // todo: 空格聚焦恒星、取消星球选中：稍微往左偏的时候有特性，建议保留该特性

          systemEvent.on(SystemEventType.KEY_DOWN, function (event) {
            if (event.keyCode === macro.KEY.space) {
              var _find;

              var test = find("Canvas/Scene_Planet/ListView");
              var togglecontainer = test.getComponent(ToggleContainer);

              for (var i = 0; i < togglecontainer.toggleItems.length; i++) {
                var _togglecontainer$togg; //遍历每一个Toggle


                if ((_togglecontainer$togg = togglecontainer.toggleItems[i]) === null || _togglecontainer$togg === void 0 ? void 0 : _togglecontainer$togg.isChecked) {
                  //若选中
                  console.log(i);
                  var ty = togglecontainer.toggleItems[i];
                  ty.isChecked = false; //设为false
                }
              } //聚焦的星系


              var focusGalaxyComponet = (_find = find('Galaxy')) === null || _find === void 0 ? void 0 : _find.getComponent(GalaxyManager);
              focusGalaxyComponet === null || focusGalaxyComponet === void 0 ? void 0 : focusGalaxyComponet.focus();
              focusGalaxyComponet === null || focusGalaxyComponet === void 0 ? void 0 : focusGalaxyComponet.setRunning(true); //继续使星系旋转
            }
          }, this);
        };

        _proto.update = function update() {
          var _this3 = this;

          var lv = new Vec3(0, 0, 0);
          var rb = this.node.getComponent(RigidBody);
          systemEvent.on(SystemEventType.MOUSE_WHEEL, function (e) {
            // console.log('鼠标滚动');
            var scoll = e.getScrollY(); // 滚轮移动时向前的速度
            // let forward_speed = 4;
            // 滚轮移动摄像机速度 随当前星系大小改变

            var seed = UserManager.userData['nowGalaxy'];
            var galaxyNode = find('Galaxy');
            var galaxyObject = galaxyNode === null || galaxyNode === void 0 ? void 0 : galaxyNode.getComponent(GalaxyManager);
            var i = (galaxyObject === null || galaxyObject === void 0 ? void 0 : galaxyObject.galaxies[seed].planets.length) - 1;
            var forward_speed = (galaxyObject === null || galaxyObject === void 0 ? void 0 : galaxyObject.galaxies[seed].planets[i].orbitalRadius) / 10;
            rb === null || rb === void 0 ? void 0 : rb.getLinearVelocity(lv);

            if (scoll > 0) {
              // console.log('向上滚动了');
              lv.z = -forward_speed;
            } else if (scoll < 0) {
              // console.log('向下滚动了');
              lv.z = forward_speed;
            }

            scoll = 0;
            lv.x = 0;
            lv.y = 0;
            Vec3.transformQuat(lv, lv, _this3.node.getRotation());
            rb === null || rb === void 0 ? void 0 : rb.setLinearVelocity(lv); //console.log("#############");
            ////////////////////
            // let rotation = new Quat()
            // // console.log(this.node.getWorldPosition(rotation));
            // // console.log(rotation);
            // this.node.getWorldRotation(rotation);
            // console.log(rotation);
            // console.log("#############");
            ///////////////
          }, this);
        };

        return CamaraCtrl;
      }(Component), _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FacilityItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './FacilityData.ts', './PlanetData.ts', './UserManager.ts', './UiItem.ts', './DivBlock.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Node, Prefab, color, DataManager, FacilityData, PlanetData, UserManager, UiItem, DivBlock;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Prefab = module.Prefab;
      color = module.color;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      FacilityData = module.default;
    }, function (module) {
      PlanetData = module.default;
    }, function (module) {
      UserManager = module.default;
    }, function (module) {
      UiItem = module.UiItem;
    }, function (module) {
      DivBlock = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

      cclegacy._RF.push({}, "f1d24/Ot3NECaoIY5KhB+6k", "FacilityItem", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var FacilityItem = exports('FacilityItem', (_dec = ccclass('FacilityItem'), _dec2 = property({
        tooltip: '升级降级两个按钮。',
        type: [Sprite]
      }), _dec3 = property({
        tooltip: '按钮的图片[升级/降级/修复/移除]。',
        type: [SpriteFrame]
      }), _dec4 = property({
        tooltip: '小模块的layout',
        type: Node
      }), _dec5 = property({
        type: Prefab,
        tooltip: '需要的预制'
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_UiItem) {
        _inheritsLoose(FacilityItem, _UiItem);

        function FacilityItem() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _UiItem.call.apply(_UiItem, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "buttons", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "icons", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "layout", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "itemTiny", _descriptor4, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = FacilityItem.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.setValue = function setValue(galaxy, planet, data) {
          if (planet === void 0) {
            planet = null;
          }

          if (data === void 0) {
            data = null;
          }

          this.node.children[this.node.children.length - 1].active = !data;

          for (var i = 0; i < this.node.children.length - 1; i++) {
            this.node.children[i].active = !!data;
          }

          if (data) {
            var dataFacility = DataManager.dataAssets['dataFacility'][data.type]; // 1. 渲染文字

            var list = {
              name: FacilityData.getFacilityName(data),
              state: FacilityData.getStateString(galaxy, data),
              layout: []
            };
            var stateColor = color('#ffffff'); // todo: 判断state：正常，暂停，损坏，低耗，及颜色
            // 能源消耗

            if (data.type >= 2 && data.type <= 4) {
              // 矿井：计算产出
              var item = ['res_sub_0', data.level * FacilityData.energyPerLevel()];
              list.layout.push(item);
            }

            if (data.type >= 1 && data.type <= 3) {
              var _i = data.type - 1; // 矿井：计算产出


              var production = PlanetData.getResFactor(planet, _i) * (data.level + 1) * UserManager.getProductionBuff(_i);
              var _item = ["res_add_" + (data.type - 1), production.toFixed(1)];
              list.layout.push(_item);
            } // 计算各资源容量


            for (var _i2 = 0; _i2 < 3; _i2++) {
              var capacity = dataFacility['capacity'][data.level - 1][_i2];

              if (capacity != 0) {
                var _item2 = ["res_sto_" + _i2, capacity];
                list.layout.push(_item2);
              }
            }

            DivBlock.childrenStackSort(this.layout, list.layout.length, this.itemTiny);
            DivBlock.render(this.node, list);

            if (data.broken) {
              this.buttons[0].node.active = false;
              this.buttons[1].node.active = true;
              this.buttons[1].spriteFrame = this.icons[2];
            } else {
              this.buttons[0].node.active = FacilityData.getUpgradeCost(data) && FacilityData.hasUpgradeTech(data);
              this.buttons[1].node.active = data.type != 0;
              this.buttons[1].spriteFrame = data.level == FacilityData.getMinLevel(planet, data.type) ? this.icons[3] : this.icons[1];
            }
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return FacilityItem;
      }(UiItem), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buttons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icons", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemTiny", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameControl.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './UserManager.ts', './AudioCtrl.ts'], function (exports) {
  'use strict';

  var _defineProperty, _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, JsonAsset, SpriteAtlas, Prefab, find, game, AudioSource, assetManager, log, director, Label, Component, DataManager, UserManager, AudioCtrl;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      JsonAsset = module.JsonAsset;
      SpriteAtlas = module.SpriteAtlas;
      Prefab = module.Prefab;
      find = module.find;
      game = module.game;
      AudioSource = module.AudioSource;
      assetManager = module.assetManager;
      log = module.log;
      director = module.director;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      UserManager = module.default;
    }, function (module) {
      AudioCtrl = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

      cclegacy._RF.push({}, "f632ftPvRFPNKlhQkgnKHKm", "GameControl", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameControl = exports('default', (_dec = ccclass('GameControl'), _dec2 = property({
        tooltip: '游戏需要预读取的所有数据文件',
        type: [JsonAsset]
      }), _dec3 = property({
        tooltip: '需要预读取的所有图集文件',
        type: [SpriteAtlas]
      }), _dec4 = property({
        tooltip: '关卡需要预读取的所有预制文件',
        type: [Prefab]
      }), _dec(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameControl, _Component);

        function GameControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "dataAssets", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "atlasAssets", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "prefabAssets", _descriptor3, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "scenes", []);

          _defineProperty(_assertThisInitialized(_this), "config", null);

          _defineProperty(_assertThisInitialized(_this), "loadingNode", null);

          return _this;
        }

        var _proto = GameControl.prototype; // LIFE-CYCLE CALLBACKS:

        _proto.onLoad = function onLoad() {
          var canvas = find('Canvas');

          if (canvas) {
            canvas.active = false; // 设为常驻节点

            game.addPersistRootNode(this.node);
            GameControl.instance = this;
            this.loadingNode = this.node.getChildByName('Loading'); // 初始化所有 dataAsset

            this.dataAssets.forEach(function (data) {
              DataManager.dataAssets[data.name] = data.json;
            }); // 读取存档

            if (UserManager.loadData()) {
              console.log("成功读取存档"); // console.log(UserManager.userData);
            }

            var source = this.getComponents(AudioSource); // 加载并设置分包 

            assetManager.loadBundle('audio', function (err, bundle) {
              if (err) {
                log('Error url [' + err + ']');
                return;
              } // console.log('读取成功');


              AudioCtrl.setBundle(source[0], source[1], bundle); // 读取并设置完音乐分包后才正式开始初始化标题

              canvas.active = true;
            });
          }
        };

        _proto.start = function start() {}
        /**
         * 读取画面
         * @param name 画面名字
         * @param config 要写入的设置
         * @returns 
         */
        ;

        _proto.loadScene = function loadScene(name, config) {
          var _this2 = this;

          if (config === void 0) {
            config = null;
          }

          this.loadingNode.active = true;
          director.loadScene(name, function (err) {
            if (err) {
              var label = _this2.node.getComponentInChildren(Label);

              label.string = err.toString();
            } else {
              _this2.loadingNode.active = false;
            }
          });
          this.config = config;
          return true;
        };

        return GameControl;
      }(Component), _defineProperty(_class3, "instance", null), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dataAssets", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "atlasAssets", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefabAssets", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ScenePlanet.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "f8693N1iRJEBplMSsr9fWaj", "ScenePlanet", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ScenePlanet = exports('ScenePlanet', (_dec = ccclass('ScenePlanet'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ScenePlanet, _Component);

        function ScenePlanet() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = ScenePlanet.prototype; // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;

        _proto.start = function start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }
        ;

        return ScenePlanet;
      }(Component)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./DataManager.ts', './FacilityData.ts', './PlanetData.ts', './GalaxyData.ts', './UserManager.ts', './AudioCtrl.ts', './Setting.ts', './GameControl.ts', './UiItem.ts', './DivBlock.ts', './TinyItem.ts', './GameConfig.ts', './ResourceBoardItem.ts', './Planet.ts', './GalaxyManager.ts', './test2.ts', './test.ts', './Utils.ts', './ListBox.ts', './UpgradeBoard.ts', './EmergencyBoard.ts', './SceneGalaxy.ts', './ResourceItem.ts', './AnimationCallback.ts', './TechItem.ts', './GalaxyItem.ts', './SceneTransfer.ts', './ValueChangeItem.ts', './DemandItem.ts', './Dialogue.ts', './SceneTechTree.ts', './CameraCtrl.ts', './FacilityItem.ts', './ScenePlanet.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});