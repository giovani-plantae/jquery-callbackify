(function($) {

    const originalFind = $.fn.find;
    const originalFilter = $.fn.filter;

    $.fn.extend({
        find: function(selector, cb = null){
    
            const ctx = originalFind.call(this, selector);
    
            if(!cb)
                return ctx;
    
            cb.call(ctx, ctx);
            return this;
        },
        filter: function(selector, cb = null){
    
            const ctx = originalFilter.call(this, selector);
    
            if(!cb)
                return ctx;
    
            cb.call(ctx, ctx);
            return this;
        }
    });

})(jQuery);
