<template>
<div class="container-fluid">
  <div class="row no-gutter flex-row">
    <div class="flex-row col-xs-12 col-sm-12 col-md-8 add-gutter">
      <panel class="flex-column">
        <panel-heading>
          <h4>Информация об ученике.</h4>
        </panel-heading>
        <panel-body>
          <personal-info-form></personal-info-form>
        </panel-body>
      </panel>
    </div>
    <div class="flex-row col-xs-12 col-sm-12 col-md-4">
      <panel class="flex-column">
        <panel-heading>
          <h4>Информация о родителе.</h4>
        </panel-heading>
        <panel-body>
          <parent-info-form></parent-info-form>
        </panel-body>
      </panel>
    </div>
  </div>
</div>
</template>

<script>
import Panel from '@/components/Reusable/Panel';
import PanelBody from '@/components/Reusable/PanelBody';
import PanelHeading from '@/components/Reusable/PanelHeading';

import PersonalInfoForm from '@/components/Forms/PersonalInfoForm';
import ParentInfoForm from '@/components/Forms/ParentInfoForm';

export default {
  name: 'PersonalInfo',
  components: { 
    Panel, 
    PanelBody, 
    PanelHeading,
    PersonalInfoForm, 
    ParentInfoForm 
  }
}
</script>

<style scoped>
.no-gutter > [class*='col-'] {
    padding-right:0;
    padding-left:0;
}

@media (min-width: 992px) {
  .add-gutter {
    padding-right: 10px !important;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
}
</style>
