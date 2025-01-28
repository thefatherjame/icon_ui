// Override BaseWidget
frappe.provide("frappe.widget");

class DisabledBaseWidget {
    constructor() {
        throw new Error("BaseWidget is disabled.");
    }
}

// Replace BaseWidget with DisabledBaseWidget
frappe.widget.widget_factory.base = DisabledBaseWidget;

console.log("BaseWidget has been forcibly disabled.");
