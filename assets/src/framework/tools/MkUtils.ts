export default class MKUtils {

  public static isNative() {
    return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_ANDROID);
  }

  public static isIOS() {
    return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_IOS);
  }

  public static isWechatGame() {
    return (cc.sys.platform == cc.sys.WECHAT_GAME);
  }

  public static isAndroid() {
    return (cc.sys.isNative) && (cc.sys.os == cc.sys.OS_ANDROID);
  }

  public static findNodeByName(root, name) {
    if (root) {
      let widget = root.getChildByName(name);
      if (widget) {
        return widget
      } else {
        let children = root.children
        for (let c of children) {
          widget = MKUtils.findNodeByName(c, name)
          if (widget) {
            return widget
          }
        }
        return null
      }
    }
    return null
  }

  //获取屏幕显示区域尺寸
  public static getShowSize() {
    let canvasSize = cc.view.getCanvasSize()
    let winSize = cc.winSize
    let showSize = cc.size(winSize.width, winSize.height)
    let canvasPro = canvasSize.width / canvasSize.height
    let winPro = winSize.width / winSize.height
    if (canvasPro > winPro) {
      showSize.width = winSize.height * canvasPro
    } else {
      showSize.height = winSize.width / canvasPro
    }
    return showSize
  }

  //获取显示区域和设计尺寸的宽高比例
  public static getShowScale() {
    let showSize = MKUtils.getShowSize()
    let winSize = cc.winSize;
    return cc.v2(showSize.width / winSize.width, showSize.height / winSize.height)
  }

  public static playScaleAni(parent: cc.Node) {
    //界面layout 尺寸从80%到110%再回到100%
    if (!parent) { return }
    let preScale = parent.scale;
    parent.scale = preScale * 0.3;
    parent.runAction(cc.scaleTo(0.2, preScale * 1).easing(cc.easeBackOut()))
  }
  public static playScaleAni2(parent: cc.Node) {
    //界面layout 尺寸从80%到110%再回到100%
    if (!parent) { return }
    let preScale = parent.scale;
    parent.scale = preScale * 0.3;
    parent.runAction(cc.sequence(
      cc.scaleTo(0.3, preScale * 1.3),
      cc.scaleTo(0.3, preScale * 1).easing(cc.easeBackInOut()),
    ))
  }

  public static playScaleAniBig(parent: cc.Node) { // 大幅度的缩放
    //界面layout 尺寸从80%到110%再回到100%
    if (!parent) { return }
    let preScale = parent.scale;
    parent.scale = preScale * 0.3;
    let scale1 = cc.scaleTo(0.3, preScale * 1.3)
    let scale2 = cc.scaleTo(0.1, preScale * 1)
    parent.runAction(cc.sequence(scale1, scale2))
  }

  public static playScaleAniSmallToNormal(parent: cc.Node) { // 大幅度的缩放
    //界面layout 尺寸从80%到110%再回到100%
    if (!parent) { return }
    let preScale = parent.scale;
    parent.scale = 0.1;
    let scale1 = cc.scaleTo(0.3, preScale * 1.1)
    let scale2 = cc.scaleTo(0.2, preScale * 1)
    parent.runAction(cc.sequence(scale1, scale2))
  }

  public static playBlackBgAct(blackBg: cc.Node, time?: any) {
    if (!blackBg) { return }
    if (time == undefined) {
      time = 0.2
    }
    let preOpacity = blackBg.opacity
    blackBg.opacity = 0
    blackBg.runAction(cc.fadeTo(time, preOpacity))
  }

  public static playDialogActBig(blackBg: cc.Node, baseNode: cc.Node) {
    MKUtils.playBlackBgAct(blackBg, 0.3)
    MKUtils.playScaleAniBig(baseNode)
  }

  public static playDialogAct(blackBg: cc.Node, baseNode: cc.Node) {
    MKUtils.playBlackBgAct(blackBg)
    MKUtils.playScaleAni(baseNode)
  }
  public static playDialogAct2(blackBg: cc.Node, baseNode: cc.Node) {
    MKUtils.playBlackBgAct(blackBg)
    MKUtils.playScaleAni2(baseNode)
  }

  public static btnScaleAct(btn: cc.Node, scale?: any) {
    if (!btn) { return }
    btn.stopAllActions()
    let preScale = scale || btn.scale
    btn.runAction(cc.repeatForever(cc.sequence(
      cc.scaleTo(0.2, 1.13 * preScale),
      cc.scaleTo(0.2, 1 * preScale),
      cc.delayTime(0.6)
    )))
  }

  public static btnScaleAct1(btn: cc.Node, scale?: any) {
    if (!btn) { return }
    let preScale = scale || btn.scale
    btn.runAction(cc.repeatForever(cc.sequence(
      cc.delayTime(0.5),
      cc.scaleTo(0.18, 1.15 * preScale),
      cc.scaleTo(0.18, preScale),
      cc.scaleTo(0.18, 1.15 * preScale),
      cc.scaleTo(0.18, preScale),
      cc.delayTime(0.5)
    )))
  }

  //按钮点击缩放，btn为触摸的node，icon为缩放效果node
  public static addTouch(btn: cc.Node, icon?: any, scaleX?: number, scaleY?: number) {
    if (!icon) {
      icon = btn
    }

    let preScaleX = btn.scaleX
    let preScaleY = btn.scaleY

    if (scaleX) {
      preScaleX = scaleX;
    }

    if (scaleY) {
      preScaleY = scaleY;
    }

    btn.on(cc.Node.EventType.TOUCH_START, function (e) {
      icon.runAction(cc.scaleTo(0.1, preScaleX * 1.1, preScaleY * 1.1))
      // icon.setScale(preScaleX*1.1, preScaleY*1.1)
    }.bind(btn), btn)

    btn.on(cc.Node.EventType.TOUCH_END, function (e) {
      icon.runAction(cc.scaleTo(0.2, preScaleX, preScaleY))
      // icon.setScale(preScaleX, preScaleY)
    }.bind(btn), btn)

    btn.on(cc.Node.EventType.TOUCH_CANCEL, function (e) {
      icon.runAction(cc.scaleTo(0.2, preScaleX, preScaleY))
      // icon.setScale(preScaleX, preScaleY)
    }.bind(btn), btn)
  }

  // 名字最大长度截取
  public static nameMaxCut(input: string, maxLen: number) {
    var output = "";
    var strlen = 0;
    for (var i = 0; i < input.length; i++) {
      var ch = input[i];
      if (ch.charCodeAt(0) > 255) //如果是汉字，则字符串长度加2
      {
        strlen += 2;
      }
      else {
        strlen++;
      }

      if (strlen <= maxLen) {
        output += ch;
      }
    }

    if (strlen > maxLen) {
      return output += "...";
    }

    return output;
  }
  private static currentTipsList = [];
  public static alertTips(str: string, showTime?: number, closeAct?: boolean, tipType?: number) {

    let isShow = MKUtils.currentTipsList.filter((value, index) => {
      return value === str;
    })
    if (isShow.length > 0) return;

    if (!showTime) { showTime = 1.2 }
    let prefabUrl = "prefab/common/AlertTips"
    cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
      MKUtils.currentTipsList.push(str);
      if (errorMessage) { cc.log('载入预制资源失败, 原因:' + errorMessage); return; }
      if (!(loadedResource instanceof cc.Prefab)) { cc.log('你载入的不是预制资源!'); return; }
      var prefab = cc.instantiate(loadedResource)
      prefab.getComponent("AlertTips").setTips(str, tipType)
      cc.director.getScene().addChild(prefab, 9999)
      prefab.setPosition(cc.v2(cc.winSize.width / 2, cc.winSize.height / 2 - 100))
      if (!closeAct) {
        MKUtils.playScaleAni(prefab)
      }
      prefab.runAction(cc.sequence(cc.delayTime(showTime), cc.spawn(cc.moveBy(1, 0, 400), cc.fadeOut(1)), cc.callFunc(function () {
        let str = prefab.getComponent("AlertTips").getTips();
        let idx = -1;
        MKUtils.currentTipsList.filter((value, index) => {
          if (value === str) idx = index;
        })
        if (idx >= 0) MKUtils.currentTipsList.splice(idx, 1);

        prefab.removeFromParent()
      })))
    })
  }

  //获取当前系统时间戳(秒)
  public static getCurOsTime() {
    let curTime = new Date()
    return Math.floor(curTime.getTime() / 1000)
  }

  public static getCurOsMillisecond() {
    let curTime = new Date()
    return curTime.getTime()
  }

  //生成n-m随机数  包括n和m
  public static randomNM(n: number, m: number) {
    return n + Math.floor(Math.random() * (m - n + 1))
  }

  //生成n-m随机数  包括n和m：浮点数
  public static randomNMF(n: number, m: number) {
    return n + Math.random() * (m - n)
  }

  //适配不同版本
  public static compareVersion(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    const len = Math.max(v1.length, v2.length)

    while (v1.length < len) {
      v1.push('0')
    }
    while (v2.length < len) {
      v2.push('0')
    }

    for (let i = 0; i < len; i++) {
      const num1 = parseInt(v1[i])
      const num2 = parseInt(v2[i])
      if (num1 > num2) {
        return 1
      } else if (num1 < num2) {
        return -1
      }
    }
    return 0
  }

  //显示跑马灯
  public static showBroad(pos?: cc.Vec2, id?: any) {
    let w = MKUtils.getShowSize().width;
    let h = MKUtils.getShowSize().height;

    let prefabUrl = "public/prefabs/CommonBroad";
    cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
      //检查资源加载
      if (errorMessage) { cc.log('载入预制资源失败, 原因:' + errorMessage); return; }
      if (!(loadedResource instanceof cc.Prefab)) { cc.log('你载入的不是预制资源!'); return; }
      //开始实例化预制资源
      var prefab = cc.instantiate(loadedResource);
      if (pos) {
        prefab.setPosition(pos);
      } else {
        prefab.setPosition(cc.v2(w, h - 40));
      }
      let broadCom = prefab.getComponent("CommonBroad");
      if (broadCom) {
        if (id == 1) {
          broadCom.showBroad(id);
        } else {
          broadCom.showBroad();
        }
      }
      cc.director.getScene().addChild(prefab, 999);
    });
  }

  public static twoPointDistance(pos1, pos2) {       // 从form的表单中分别提取两个点的横、纵坐标
    let x1 = pos1.x;   // 第一个点的横坐标
    let y1 = pos1.y;   // 第一个点的纵坐标
    let x2 = pos2.x;   // 第二个点的横坐标
    let y2 = pos2.y;   // 第二个点的纵坐标
    let xdiff = x2 - x1;            // 计算两个点的横坐标之差
    let ydiff = y2 - y1;            // 计算两个点的纵坐标之差
    return Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5);   // 计算两点之间的距离，并将结果返回表单元素
  }

  public static loadPrefab(prefabUrl, successCallback?: any, failCallback?: any) {
    let prefab = cc.loader.getRes(prefabUrl, cc.Prefab)
    if (prefab && prefab != null) {
      if (successCallback) {
        successCallback(prefab)
      }
    } else {
      cc.loader.loadRes(prefabUrl, function (errorMessage, downPrefab) {
        if (errorMessage) {
          cc.log("load " + prefabUrl + " error : " + errorMessage);
          if (failCallback) {
            failCallback()
          }
          return;
        }
        if (successCallback) {
          successCallback(downPrefab)
        }
      }.bind(this));
    }
  }
  public static loadDir(frameUrl, successCallback?: any, failCallback?: any, type = cc.SpriteFrame) {
    cc.resources.loadDir(frameUrl, type, function (err, assets) {
      // ...
      cc.log("===========", assets);
      // if()
    });
  }

  public static loadSpriteFrame(frameUrl, successCallback?: any, failCallback?: any) {
    let spriteFrame = cc.loader.getRes(frameUrl, cc.SpriteFrame)
    if (spriteFrame && spriteFrame != null) {
      if (successCallback) {
        successCallback(spriteFrame)
      }
    } else {
      cc.loader.loadRes(frameUrl, cc.SpriteFrame, function (err, downSpriteFrame) {
        if (err) {
          cc.log("load " + frameUrl + " error : " + err);
          if (failCallback) {
            failCallback()
          }
          return;
        }
        if (successCallback) {
          successCallback(downSpriteFrame)
        }
      }.bind(this));
    }
  }

  public static loadSoundEffect(url) {
    let gameloadSound = cc.sys.localStorage.getItem("gameloadSound")
    // if (gameloadSound && gameloadSound == "1") {
    //     DataManager.getInstance().setIsPlaySound(false);
    // } else {
    //     DataManager.getInstance().setIsPlaySound(true);
    // }

    // if (!DataManager.getInstance().getIsPlaySound()) {
    //     return
    // }

    let audioClip = cc.loader.getRes(url, cc.AudioClip)
    if (audioClip) {
      if (!MKUtils.effectIsOpen()) { return }
      cc.audioEngine.play(audioClip, false, 1)
    } else {
      cc.loader.loadRes(url, function (errorMessage, loadedResource) {
        if (errorMessage) {
          cc.log('载入预制资源失败, 原因:' + errorMessage);
          return;
        }
        if (!(loadedResource instanceof cc.AudioClip)) { cc.log('你载入的不是声音资源!'); return; }
        if (!MKUtils.effectIsOpen()) { return }
        cc.audioEngine.play(loadedResource, false, 1)
      }.bind(this));
    }
  }

  public static loadSoundMusic(url) {
    let gameloadMusic = cc.sys.localStorage.getItem("gameloadMusic")
    // if (gameloadMusic && gameloadMusic == "1") {
    //     DataManager.getInstance().setIsPlayMusic(false);
    // } else {
    //     DataManager.getInstance().setIsPlayMusic(true);
    // }
    // if (!DataManager.getInstance().getIsPlayMusic()) {
    //     return
    // }

    cc.sys.localStorage.setItem("MusicPlayUrl", url)
    let audioClip = cc.loader.getRes(url, cc.AudioClip)
    if (audioClip) {
      if (!MKUtils.musicIsOpen()) { return }
      cc.audioEngine.playMusic(audioClip, true)
    } else {
      cc.loader.loadRes(url, function (errorMessage, loadedResource) {
        if (errorMessage) {
          cc.log('载入预制资源失败, 原因:' + errorMessage);
          return;
        }
        if (!(loadedResource instanceof cc.AudioClip)) { cc.log('你载入的不是声音资源!'); return; }
        if (!MKUtils.musicIsOpen()) { return }
        cc.audioEngine.playMusic(loadedResource, true)
        // DataManager.getInstance().isNeverPlayMusic = true
      }.bind(this));
    }
  }

  public static stopMusic() {
    cc.sys.localStorage.setItem("MusicPlayUrl", "")
    cc.audioEngine.stopMusic()
  }

  public static setEffect(open: boolean) {
    cc.sys.localStorage.setItem("EffectSwitch", (open ? "1" : "0"))
    if (!open) {
      cc.audioEngine.stopAllEffects()
    }
  }

  public static effectIsOpen() {
    return cc.sys.localStorage.getItem("EffectSwitch") != "0"
  }

  public static setMusic(open: boolean) {
    if (open == MKUtils.musicIsOpen()) {
      return
    }
    cc.sys.localStorage.setItem("MusicSwitch", (open ? "1" : "0"))
    if (!open) {
      cc.audioEngine.stopMusic()
    } else {
      let MusicPlayUrl = cc.sys.localStorage.getItem("MusicPlayUrl")
      if (MusicPlayUrl && MusicPlayUrl != "") {
        MKUtils.loadSoundMusic(MusicPlayUrl)
      }
    }
  }

  public static musicIsOpen() {
    return cc.sys.localStorage.getItem("MusicSwitch") != "0"
  }

  public static setSound(open: boolean) {
    MKUtils.setEffect(open)
    MKUtils.setMusic(open)
  }

  public static preLoadSoundEffect(prefabUrl, successCallback: any, failCallback?: any) {
    cc.loader.loadRes(prefabUrl, function (errorMessage, loadedResource) {
      if (errorMessage) {
        cc.log('载入预制资源失败, 原因:' + errorMessage);
        failCallback();
        return;
      }
      if (!(loadedResource instanceof cc.AudioClip)) { cc.log('你载入的不是声音资源!'); return; }
      successCallback();
    }.bind(this));
  }

  public static loadSkeletonData(url, successCallback?: any, failCallback?: any) {
    console.log("2222222222", url);
    // let res = null;
    let res = cc.loader.getRes(url, sp.SkeletonData)
    console.log(res, "xxxxxxx", url);
    if (res && res != null) {
      if (successCallback) {
        console.log(res, "aaaaaaaaaaaaaaa", url);
        successCallback(res)
      }
    } else {
      console.log("33333333333333=", url);
      cc.loader.loadRes(url, sp.SkeletonData, function (errorMessage, res) {
        console.log("44444444444444", res);
        if (errorMessage) {
          cc.log("load " + url + " error : " + errorMessage);
          if (failCallback) {
            failCallback()
          }
          return;
        }
        if (successCallback) {
          successCallback(res)
        }
      }.bind(this));
    }
  }

  //重复利用node
  public static repeatPrefab(prefabUrl, parent, nodeName, successCallback, zIndex?: number) {
    if (zIndex == undefined) { zIndex = 0 }
    let node: cc.Node = MKUtils.findNodeByName(parent, nodeName)
    if (node) {
      node.stopAllActions()
      node.active = true
      node.zIndex = zIndex
      successCallback(node)
    } else {
      MKUtils.loadPrefab(prefabUrl, function (prefab) {
        node = cc.instantiate(prefab)
        parent.addChild(node, zIndex, nodeName)
        successCallback(node)
      })
    }
  }

  public static repeatSpine(url, parent, nodeName, successCallback, zIndex?: number) {
    if (zIndex == undefined) { zIndex = 0 }
    let node: cc.Node = MKUtils.findNodeByName(parent, nodeName)
    if (node) {
      node.stopAllActions()
      node.active = true
      node.zIndex = zIndex
      successCallback(node)
    } else {
      MKUtils.loadSkeletonData(url, function (spineres: sp.SkeletonData) {
        let node = new cc.Node()
        let spine = node.addComponent(sp.Skeleton)
        spine.skeletonData = spineres
        spine.premultipliedAlpha = false
        parent.addChild(node, zIndex, nodeName)
        successCallback(node)
      })
    }
  }

  // 顺时针角度
  public static getAngle(from: cc.Vec2, to: cc.Vec2) {
    let x = to.x - from.x
    let y = to.y - from.y
    let mathAngle = 90 //逆时针
    if (x == 0) {
      if (y >= 0) {
        mathAngle = 90
      } else {
        mathAngle = 270
      }
    } else {
      let tanAngle = Math.atan(y / x) * 180 / Math.PI
      if (x > 0) {
        if (y >= 0) {
          mathAngle = tanAngle
        } else {
          mathAngle = tanAngle + 360
        }
      } else {
        mathAngle = tanAngle + 180
      }
    }

    // cc.log("mathAngle = ", mathAngle)
    let cocosAngle = (360 - mathAngle + 90) % 360
    // cc.log("cocosAngle = ", cocosAngle)
    return cocosAngle
  }

  public static getUUID() {
    let UUIDStr = "game_only_uuid"
    let uuid = cc.sys.localStorage.getItem(UUIDStr)
    if (uuid) {
      return uuid
    }
    uuid = "uuid_" + MKUtils.getCurOsTime() + "_" + MKUtils.randomNM(0, 999) + "_" + MKUtils.randomNM(0, 999)
    cc.sys.localStorage.setItem(UUIDStr, uuid)
    return uuid
  }

  // 01:30
  public static tranTime1(sec) {
    sec = Math.ceil(sec)
    if (sec <= 0) { return "00:00" }
    let min = Math.floor(sec / 60)
    let s = Math.floor((sec - min * 60))
    return "" + MKUtils.add0(min) + ":" + MKUtils.add0(s)
  }

  //1小时20分
  public static tranTime2(sec) {
    if (sec <= 0) { return "0分" }
    let hour = Math.floor(sec / 3600)
    let min = Math.floor((sec - hour * 3600) / 60)
    let str = ""
    if (hour > 0) {
      str += ("" + hour + "小时")
    }
    if (min > 0) {
      str += ("" + min + "分钟")
    }
    return str
  }

  public static add0(m: number) {
    return m < 10 ? '0' + m : m;
  }

  public static isOneDay(time1, time2) {
    let data1 = new Date(time1)
    let data2 = new Date(time2)
    return data1.getFullYear() == data2.getFullYear() && data1.getMonth() == data2.getMonth() && data1.getDate() == data2.getDate()
  }

  public static tranDateHMS(time) {
    let date = new Date(time)
    return {
      hour: date.getHours(),
      min: date.getMinutes(),
      sec: date.getSeconds()
    }
  }

  public static changeProAct1(sprite: cc.Sprite, num1: number, num2: number, time?: number) {
    time = time || 0.5
    let speed = (num2 - num1) / time

    cc.director.getScheduler().unscheduleAllForTarget(sprite)
    cc.director.getScheduler().schedule(function (dt) {
      num1 = num1 + speed * dt
      if (speed == 0 || (speed > 0 && num1 >= num2) || (speed < 0 && num1 <= num2)) {
        num1 = num2
        cc.director.getScheduler().unscheduleAllForTarget(sprite)
      }
      sprite.fillRange = num1
    }, sprite, 0)
  }

  public static changeNumLabelAct1(label: cc.Label, num1: number, num2: number, callback: any, time?: number) {
    time = time || 1
    let speed = (num2 - num1) / time

    cc.director.getScheduler().unscheduleAllForTarget(label)
    cc.director.getScheduler().schedule(function (dt) {
      num1 = num1 + speed * dt
      if (speed == 0 || (speed > 0 && num1 >= num2) || (speed < 0 && num1 <= num2)) {
        num1 = num2
        cc.director.getScheduler().unscheduleAllForTarget(label)
      }
      callback(num1)
    }, label, 0)
  }

  //取小数点后几位
  public static cutPoint(num: number, point: number) {
    let ten = Math.pow(10, Math.floor(point))
    return Math.floor(num * ten) / ten
  }

  public static cutPointCeil(num: number, point: number) {
    let ten = Math.pow(10, Math.floor(point))
    return Math.ceil(num * ten) / ten
  }

  public static tranNumOld(num: number) {
    let str = ""
    let showNum = 0
    if (num < 0) {
      str = "" + Math.floor(num)
    } else if (num <= 9999) {
      str = "" + Math.round(num)
    } else if (num < 999500) {
      showNum = Math.round(num / 1000)
      str = "" + showNum + "A"
    } else if (num < 999500000) {
      showNum = Math.round(num / 1000000)
      str = "" + showNum + "B"
    } else if (num < 999500000000) {
      showNum = Math.round(num / 1000000000)
      str = "" + showNum + "C"
    } else {
      showNum = Math.round(num / 1000000000000)
      str = "" + showNum + "D"
    }
    return str
  }

  public static tranNum(num: number, isFloat?: boolean) {
    let str = ""
    let showNum = 0
    if (num <= 0) {
      if (isFloat) {
        str = "" + num.toFixed(1)
      } else {
        str = "" + Math.floor(num)
      }
    } else if (num <= 9999) {
      if (isFloat) {
        str = "" + num.toFixed(1)
      } else {
        str = "" + Math.round(num)
      }
    } else {
      let syms = ['K', 'M', 'B', 'T', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU']
      let maxNum = 999500
      let cc = 1000
      let index = -1
      for (let i = 0; i < syms.length; i++) {
        if (num < maxNum) {
          showNum = Math.round(num / cc)
          str = "" + showNum + syms[i]
          index = i
          break
        } else {
          maxNum *= 1000
          cc *= 1000
        }
      }
      if (index == -1) {
        showNum = Math.round(num / cc)
        str = "" + showNum + "Z"
      }
    }

    return str
  }

  public static split(str, s1) {
    let arr = str.split(s1)
    if (arr.length == 1 && arr[0] == "") {
      arr = []
    }
    return arr
  }

  public static getWorldPos(node: cc.Node) {
    return node.convertToWorldSpaceAR(cc.v2(0, 0)).add(cc.v2(-cc.winSize.width / 2, -cc.winSize.height / 2))
  }

  public static versionCompare(versionA, versionB) {
    var vA = versionA.split('.');
    var vB = versionB.split('.');
    for (var i = 0; i < vA.length; ++i) {
      var a = parseInt(vA[i]);
      var b = parseInt(vB[i] || 0);
      if (a === b) {
        continue;
      }
      else {
        return a - b;
      }
    }
    if (vB.length > vA.length) {
      return -1;
    }
    else {
      return 0;
    }
  }

  public static subName(str: string) {
    return (str.length > 6 ? (str.substring(0, 6) + "...") : str)
  }

  //scrollview item touchEnd
  public static itemOnTouchCall(node: cc.Node, callback?: any) {
    let enable = false
    node.on(cc.Node.EventType.TOUCH_START, function (e) {
      enable = true
    })
    node.on(cc.Node.EventType.TOUCH_MOVE, function (e) {
      let moveY = Math.abs(e.touch._point.y - e.touch._startPoint.y)
      if (moveY > 10) { enable = false }
    })
    node.on(cc.Node.EventType.TOUCH_END, function (e) {
      if (enable && callback) {
        callback()
      }
    })
  }

  public static fixProgress(progress: number) {
    if (progress < 0.05) {
      return 0
    }

    if (progress < 0.1) {
      return 0.1
    }

    return progress
  }

  //时间转换 天时分 传入秒
  public static sencondsFormat(s: number) {
    if (s < 0) {
      return "0天0時0分";
    }
    const d = 24 * 3600;
    const day = Math.floor(s / d);
    const hour = Math.floor((s - day * d) / 3600);
    const minute = Math.floor((s - day * d - hour * 3600) / 60);
    // const sencond = s - day * d - hour * 3600 - minute * 60;
    const format = day + "天" + hour + "時" + minute + "分";
    return format;
  }

  //js去掉所有空格 \s表示查找空格带上加好表示连续的空格
  public static trimSpace(str: string) {
    let str1 = str.replace(/\s+/g, "")
    return str1
  }

  // 计时器
  public static setNodeDelay(baseNode, delayTime, callback) {
    baseNode.runAction(cc.sequence(cc.delayTime(delayTime), cc.callFunc(function () {
      if (callback) {
        callback()
      }
    }.bind(this))))
  }
  //随机数组
  public static randomSort(a, b) {
    return Math.random() > 0.5 ? 1 : -1;
  }

  public static setStatsColor(font: cc.Color = cc.Color.WHITE, background: cc.Color = cc.color(0, 0, 0, 150)) {
    const profiler = cc.find('PROFILER-NODE');
    if (!profiler) return cc.warn('未找到统计面板节点！');

    // 文字
    profiler.children.forEach(node => {
      node.color = font;
      node.getComponent(cc.Label).fontSize = 18
      // node.addComponent(cc.LabelOutline).color = cc.Color.WHITE;
    });

    // 背景
    let node = profiler.getChildByName('BACKGROUND');
    if (!node) {
      node = new cc.Node('BACKGROUND');
      profiler.addChild(node, cc.macro.MIN_ZINDEX);
      node.setContentSize(profiler.getBoundingBoxToWorld());
      node.setPosition(0, 0);
    }
    const graphics = node.getComponent(cc.Graphics) || node.addComponent(cc.Graphics);
    graphics.clear();
    graphics.rect(-5, 12.5, node.width + 10, node.height - 10);
    graphics.fillColor = background;
    graphics.fill();
  }


  /** 计算今天的0点时刻对应的时间戳（ms） */
  public static calculNowDayStartTimeStamp(): number {
    // 1. 获取当前时间戳 - 秒
    let currTs = Date.now() / 1000;

    // 2. 获取日总秒数 = 时*分*秒
    let dayTs = 24 * 60 * 60;

    // 3. 求总天数
    let dayTotal = Math.floor(currTs / dayTs);

    // 4. 求出当日开始时秒数
    let dayZeroTs = dayTotal * dayTs;

    // 5. 去掉时差(返回的是分)，需要转成秒
    let offset = new Date().getTimezoneOffset() * 60;  // -480

    let curStartSecond = (dayZeroTs + offset) * 1000;
    return curStartSecond;
  }
}


