import app from "flarum/common/app";

app.initializers.add("piwind-quiet-edits", (app) => {
  app.extensionData
    .for("piwind-quiet-edits")
    .registerSetting({
      setting: "piwind-quiet-edits.grace_period",
      type: "number",
      label: app.translator.trans(
        "piwind-quiet-edits.admin.settings.grace_period_label"
      ),
      help: app.translator.trans(
        "piwind-quiet-edits.admin.settings.grace_period_text"
      ),
    })
    .registerSetting({
      setting: "piwind-quiet-edits.ignore_case_differences",
      type: "boolean",
      label: app.translator.trans(
        "piwind-quiet-edits.admin.settings.ignore_case_differences_label"
      ),
    })
    .registerSetting({
      setting: "piwind-quiet-edits.ignore_whitespace_differences",
      type: "boolean",
      label: app.translator.trans(
        "piwind-quiet-edits.admin.settings.ignore_whitespace_differences_label"
      ),
    });
});
