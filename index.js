;(function(factory){
if(typeof define == 'function' && define.amd){
    //seajs or requirejs environment
    define(['jQuery', 'class', 'overlay', 'mask'], factory);
}else if(typeof module === 'object' && typeof module.exports == 'object'){
    module.exports = factory(
        require('jquery'),
        require('class'),
        require('overlay'),
        require('mask')
    );
}else{
    window.jQuery.toast = factory(window.jQuery, window.jQuery.klass, window.jQuery.overlay, window.jQuery.fn.mask);
}
})(function($, Class, Overlay, Mask){
var Toast = Class.extend(Overlay, {
    initialize: function(opt){
        var options = $.extend({
            content: '',
            time: 3000,
            mask: false,
            className: ''
        }, opt || {});

        var self = this;

        Toast.destroy();
        Toast.instance = self;

        if(options.mask){
            self.$mask = new Mask();
        }

        self.$overlay = new Overlay({
            content: options.content,
            center: true,
            className: 'ui3-toast ' + options.className
        });

        if(typeof options.time == 'number'){
            self.id = setTimeout(function(){
                self.destroy();
            }, options.time);
        }
    },

    destroy: function(){
        var self = this;

        clearTimeout(self.id);
        self.$overlay.destroy();
        self.$overlay = null
        self.$mask && self.$mask.destroy();
        self.$mask = null;
        Toast.instance = null;
    }
});

Toast.instance = null;

Toast.destroy = function(){
    Toast.instance && Toast.instance.destroy();
};

Toast.show = function(content, time, useMask, className){
    var toast = new Toast({
        content: content,
        time: time,
        mask: useMask,
        className: className
    });

    return toast;
};

$.each(['success', 'error', 'notice', 'loading'], function(index, item){
    Toast[item] = function(content, time, useMask){
        return Toast.show(content, time, useMask, 'ui3-toast-' + item);
    };
});

return Toast;

});