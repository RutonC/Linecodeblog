import {defineConfig, StudioLogo, StudioNavbar} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemas'
import { moveSyntheticComments } from 'typescript';
import {lineCodeTheme} from './theme'
import NavbarStudio from './components/NavbarStudio';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;


export default defineConfig({
  basePath:"/studio",
  name: 'LineCode',
  title: 'lineCode Studio',
  projectId,
  dataset,
  plugins: [deskTool({
    defaultDocumentNode:getDefaultDocumentNode,
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      logo: StudioLogo,
      navbar:NavbarStudio,
    }
  },
  theme: lineCodeTheme,
})
