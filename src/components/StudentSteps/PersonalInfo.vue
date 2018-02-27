<template>
  <panel>
    <panel-body>
      <personal-info-form></personal-info-form>
    </panel-body>
  </panel>
</template>

<script>
import Panel from '@/components/Reusable/Panel';
import PanelBody from '@/components/Reusable/PanelBody';
import PersonalInfoForm from '@/components/Forms/PersonalInfoForm';

export default {
  name: 'PersonalInfo',
  components: { Panel, PanelBody, PersonalInfoForm }
}
</script>
