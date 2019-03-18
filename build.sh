#!/bin/bash
ZIP_NAME="dmms-ui-web.zip"

npm run build
cd dist
zip -r ~/dmms_tmp/$ZIP_NAME *
