import { Helmet } from 'react-helmet-async';

import { ModuleView } from 'src/sections/module';

export default function ModuleAdd() {
    return (
      <>
        <Helmet>
          <title> Module | Minimal UI </title>
        </Helmet>
  
       <ModuleView/>
      </>
    );
  }