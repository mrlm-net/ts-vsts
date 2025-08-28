import * as React from "react";
import * as ReactDOM from "react-dom";
import * as SDK from 'azure-devops-extension-sdk';

export async function Entrypoint(
    ContributionEntry: () => React.ReactElement<any>
) {
    // Initialize SDK and await for context
    await SDK.init({
        loaded: false
    });
    // Get the root element from DOM
    ReactDOM.render(
        <React.StrictMode>
            <ContributionEntry />
        </React.StrictMode>,
        document.getElementById("root")
    );
    // Signal SDK that extension and SDK context is fully loaded
    await SDK.notifyLoadSucceeded();
}