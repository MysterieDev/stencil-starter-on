/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ExampleComponent {
        "exampleProp": string;
        "exampleToUpperCase": () => Promise<void>;
    }
    interface GrpsixButtons {
        "buttonLabel": string;
    }
    interface GrpsixCookiebanner {
    }
    interface GrpsixNewsletter {
        "websiteName": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLExampleComponentElement extends Components.ExampleComponent, HTMLStencilElement {
    }
    var HTMLExampleComponentElement: {
        prototype: HTMLExampleComponentElement;
        new (): HTMLExampleComponentElement;
    };
    interface HTMLGrpsixButtonsElement extends Components.GrpsixButtons, HTMLStencilElement {
    }
    var HTMLGrpsixButtonsElement: {
        prototype: HTMLGrpsixButtonsElement;
        new (): HTMLGrpsixButtonsElement;
    };
    interface HTMLGrpsixCookiebannerElement extends Components.GrpsixCookiebanner, HTMLStencilElement {
    }
    var HTMLGrpsixCookiebannerElement: {
        prototype: HTMLGrpsixCookiebannerElement;
        new (): HTMLGrpsixCookiebannerElement;
    };
    interface HTMLGrpsixNewsletterElement extends Components.GrpsixNewsletter, HTMLStencilElement {
    }
    var HTMLGrpsixNewsletterElement: {
        prototype: HTMLGrpsixNewsletterElement;
        new (): HTMLGrpsixNewsletterElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "example-component": HTMLExampleComponentElement;
        "grpsix-buttons": HTMLGrpsixButtonsElement;
        "grpsix-cookiebanner": HTMLGrpsixCookiebannerElement;
        "grpsix-newsletter": HTMLGrpsixNewsletterElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface ExampleComponent {
        "exampleProp"?: string;
        "onExampleEvent"?: (event: CustomEvent<string>) => void;
    }
    interface GrpsixButtons {
        "buttonLabel"?: string;
    }
    interface GrpsixCookiebanner {
    }
    interface GrpsixNewsletter {
        "websiteName"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "example-component": ExampleComponent;
        "grpsix-buttons": GrpsixButtons;
        "grpsix-cookiebanner": GrpsixCookiebanner;
        "grpsix-newsletter": GrpsixNewsletter;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "example-component": LocalJSX.ExampleComponent & JSXBase.HTMLAttributes<HTMLExampleComponentElement>;
            "grpsix-buttons": LocalJSX.GrpsixButtons & JSXBase.HTMLAttributes<HTMLGrpsixButtonsElement>;
            "grpsix-cookiebanner": LocalJSX.GrpsixCookiebanner & JSXBase.HTMLAttributes<HTMLGrpsixCookiebannerElement>;
            "grpsix-newsletter": LocalJSX.GrpsixNewsletter & JSXBase.HTMLAttributes<HTMLGrpsixNewsletterElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
