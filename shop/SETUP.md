# Digital shop setup

Status: preview only. All four checkout links are blank and purchase buttons disabled.

## Products
- weekly: £2.50, 01_Realistic_Weekly_Planner PDF + DOCX + instructions
- event: £3.50, 02_Calm_Event_Organiser PDF + DOCX + instructions
- content: £3.50, 03_Simple_Content_Planner PDF + DOCX + instructions
- bundle: £6.00, CUSTOMER_Planner_Collection.zip

Prices are proposed launch prices. Check final checkout totals and tax settings before launch.

## Before launch
1. Obtain owner approval to connect Payhip Free (5% per sale plus processor fees) and the owner's chosen supported payment account. The owner completes sign-in, verification and payout details privately.
2. Create four digital products with the stated customer files. Upload no seller guide and no CV. Do not commit paid files to this public repository.
3. Confirm licence, buyer disclosures, cancellation/refund handling and contact details at checkout. Avoid a blanket no-refunds claim.
4. Copy verified HTTPS payhip.com/b/ product URLs into checkout.js. No secret keys are needed on this site.
5. Test the complete provider checkout and receipt/download flow, all four products, file contents, and price/currency settings. A cancelled payment must not unlock files. Do not replace provider download delivery with an unprotected website success-page link.
6. Get separate publication approval. Remove the shop noindex tag and update preview wording on the product page only when the shop is actually ready.
7. Merge only the reviewed changes after checking current main and website deployment workflow.

Local verification: serve repository root over HTTP. Check /shop/ and /products/, mobile navigation, Dark/Bright/Cool appearance, product anchor links, keyboard access, and no enabled checkout while links are absent.
