﻿define([
    'jquery',
    'underscore',
    'backbone',
    'namespace'
], function ($, _, Backbone, ns) {
    ns.define("HomeJS.components");
    HomeJS.components.Label = Backbone.View.extend({
        tagName: 'div',
        className: 'control-group',
        initialize: function () {
            if (this.options.dataIndex)
                this.model.on('change:' + this.options.dataIndex, this.render, this);
        },
        render: function () {
            var value = (this.model && this.model.get(this.options.dataIndex));
            var valueFormated = value || '-';
            if (this.options.renderer && valueFormated != '-')
                valueFormated = this.options.renderer(value);

            var html = "";
            if (this.options.title) {
                html += "<label class='control-label'>" + this.options.title + "</label>";
            }
            html += "<div class='controls'>\<div class='component-label'>" + valueFormated + "</div>\</div>";

            this.$el.html(html);
            return this;
        }
    });
});