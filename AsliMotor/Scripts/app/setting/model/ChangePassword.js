﻿define([
    'underscore',
    'backbone',
    'namespace'
], function (_, Backbone, ns) {
    ns.define('am.setting.model');
    am.setting.model.ChangePassword = Backbone.Model.extend({
        url: '/setting/changePassword',
        defaults: {
            OldPassword: "",
            NewPassword: "",
            ConfirmNewPassword: ""
        },
        initialize: function () {
            this.validators = {};
            this.validators.OldPassword = function (value) {
                return value.length > 0 ? { isValid: true} : { isValid: false, message: "Password harus diisi" };
            };
            this.validators.NewPassword = function (value) {
                if (value.length < 6)
                    return { isValid: false, message: "Password minimal 6 karakter." };
                else if (value.length <= 0)
                    return { isValid: false, message: "Password baru harus diisi" };
                else
                    return { isValid: true };
            };
            this.validators.ConfirmNewPassword = function (value, model) {
                if (value.length < 1)
                    return { isValid: false, message: "Konfirmasi Password harus diisi" };
                else if (value != model.get("NewPassword"))
                    return { isValid: false, message: "Password tidak cocok" };
                else
                    return { isValid: true };
            };
        },
        validateItem: function (key) {
            return (this.validators[key]) ? this.validators[key](this.get(key), this) : { isValid: true };
        },
        validateAll: function () {
            var errors = [];
            for (var key in this.validators) {
                if (this.validators.hasOwnProperty(key)) {
                    var check = this.validators[key](this.get(key), this);
                    if (check.isValid === false) {
                        var e = {};
                        e.field = key;
                        e.message = check.message;
                        errors.push(e);
                    }
                }
            }
            return _.size(errors) > 0 ? { isValid: false, errors: errors} : { isValid: true };
        }
    });

    return am.setting.model.ChangePassword;
});