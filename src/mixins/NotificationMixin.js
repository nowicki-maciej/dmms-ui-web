export const NotificationMixin = {
  methods: {
    nShow: function (text) {
      this.$noty.show(text);
    },
    nSuccess: function (text) {
      this.$noty.success(text);
    },
    nError: function (text) {
      this.$noty.error(text);
    },
    nWarning: function (text) {
      this.$noty.warning(text);
    },
    nInfo: function (text) {
      this.$noty.info(text);
    }
  },
};
