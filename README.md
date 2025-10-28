# Airdrop Manager

A clean and modern web application to manage creating and claiming cryptocurrency airdrops.

## Overview

This application provides a user-friendly interface for two main functions:
*   **Claiming Airdrops:** Users can connect their crypto wallets to see and claim airdrops they are eligible for.
*   **Creating Airdrops:** Users can launch new airdrop campaigns by specifying the token, recipient data, and claim period.

## Core Dependencies

This project is built using React and leverages the `@reown/appkit` for seamless wallet integration. To function correctly, it relies on the following packages:

*   `npm:@reown/appkit@A1.7.3`
*   `npm:@reown/appkit-adapter-ethers@A1.7.3`
*   `npm:@reown/appkit-adapter-wagmi@A1.7.3`

### Setup Information

In this development environment, these packages are not installed via a local `package.json` and `npm install`. Instead, they are loaded directly in the browser using an **`importmap`** defined in `index.html`.

This means there are no local installation steps required to run the project. The application is pre-configured to resolve and use these libraries for all wallet-related interactions.

```html
<!-- Snippet from index.html -->
<script type="importmap">
{
  "imports": {
    "@reown/appkit": "https://aistudiocdn.com/reown/appkit@A1.7.3",
    "@reown/appkit-adapter-ethers": "https://aistudiocdn.com/reown/appkit-adapter-ethers@A1.7.3",
    "@reown/appkit-adapter-wagmi": "https://aistudiocdn.com/reown/appkit-adapter-wagmi@A1.7.3",
    "wagmi": "https://aistudiocdn.com/wagmi@2.9.2",
    "viem": "https://aistudiocdn.com/viem@2.10.3",
    ...
  }
}
</script>
```
