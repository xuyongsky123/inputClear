function inputClear(ele){

    //初始化样式及效果
    this.init(ele);

    return document.getElementsByClassName(ele);

}

inputClear.prototype.init = function(ele){

    var T = this;
    this.container = $('.'+ele);  //input包装容器
    this.inputEle = this.container.children('input');   //input输入框
    this.deleteEle = this.container.children('.deleteEle'); //清空按钮

    (function(){
        //处理ie9不支持栅格键点击触发onpropertychange事件
        if(navigator.appName == 'Microsoft Internet Explorer'){
            if(navigator.appVersion.match(/9./i) == '9.'){
                T.inputEle.keyup(function(event){

                    var t = $(this);
                    var _btn = t.parent().children('.deleteEle');

                    if(event.keyCode == 8){
                        ;(t.val() == '') ? _btn.fadeOut(100) : _btn.fadeIn(100);
                    }

                });
            }
        }

        T.inputEle.on('blur',function(){

            var _btn = $(this).parent().children('.deleteEle');

            _btn.fadeOut(300);

        }).on('focus',function(){

            var t = $(this);
            var _btn = t.parent().children('.deleteEle');

            ;(t.val() == '') ? _btn.fadeOut(100) : _btn.fadeIn(100);

        }).on('input propertychange',function(){

            var t = $(this);
            var _btn = t.parent().children('.deleteEle');

            ;(t.val() == '') ? _btn.fadeOut(100) : _btn.fadeIn(100);

        });

        T.deleteEle.on('mousedown',function(){

            var t = $(this);
            var _btn = t.parent().children('input');

            t.hide();
            _btn.val('');

        });

    })();

    
}
