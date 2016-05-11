function inputClear(ele){
    var T = this;
    this.container = $('.'+ele);  //input包装容器
    this.inputEle = this.container.find('input');   //input输入框
    this.deleteEle = this.inputEle.next(); //清空按钮

    //初始化样式及效果
    this.init();
}

inputClear.prototype.init = function(){
    var T = this;

    (function(){
        //处理ie9不支持栅格键点击触发onpropertychange事件
        if(navigator.appName == 'Microsoft Internet Explorer'){
            if(navigator.appVersion.match(/9./i) == '9.'){
                T.inputEle.keyup(function(event){
                    if(event.keyCode == 8){
                        ($(this).val() == '') ? $(this).next().fadeOut(100) : $(this).next().fadeIn(100);
                    }
                });
            }
        }

        T.inputEle.on('blur',function(){
            $(this).next().fadeOut(300);
        }).on('focus',function(){
            ;($(this).val() == '') ? $(this).next().fadeOut(100) : $(this).next().fadeIn(100); 
        }).on('input propertychange',function(){
            ;($(this).val() == '') ? $(this).next().fadeOut(100) : $(this).next().fadeIn(100);
        });

        T.deleteEle.on('click',function(){
            $(this).hide().prev().val('');
        });

    })();

    
}
