import CMS from 'netlify-cms'

import { ColorsPreview } from '../components/colors'

import * as ColorWidget from "netlify-cms-widget-color";
CMS.registerWidget("color", ColorWidget.Control);
CMS.registerPreviewTemplate("styles", ColorsPreview);