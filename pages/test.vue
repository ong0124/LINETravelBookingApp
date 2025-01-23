<template>
  <div>
    <div :class="{'bg-red': tab === 'oneway', 'bg-default': tab === 'rounded'}" class="content">
      <p>tab: {{ tab }}</p>
      <p>成人票數: {{ adult }}</p>
      <p>兒童票數: {{ child }}</p>
      <p>總票價: ¥{{ totalPrice }}</p>
      <p>聯繫人: {{ contact }}</p>
      <p>電話: {{ phone }}</p>
      <p>------------------去程--------------------</p>
      <p>p2: {{ translatedp2 }}</p>
      <p>p3: {{ translatedp3 }}</p>
      <p>船到達日期: {{ DateArrivalShip }}</p>
      <p>穿梭日期: {{ DateShuttle }}</p>
      <p>船到達時間: {{ TimeArrivalShip }}</p>
      <p>穿梭時間: {{ TimeShuttle }}</p>
      <p>--------------------返程-------------------</p>
      <p>p4: {{ translatedp4 }}</p>
      <p>p5: {{ translatedp5 }}</p>
      <p>船到達日期: {{ DateArrivalShipReturn }}</p>
      <p>穿梭日期: {{ DateShuttleReturn }}</p>
      <p>船到達時間: {{ TimeArrivalShipReturn }}</p>
      <p>穿梭時間: {{ TimeShuttleReturn }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const route = useRoute();
    const { t } = useI18n();

    const tab = route.query.tab || '未提供';
    const adult = route.query.adult || '未提供';
    const child = route.query.child || '未提供';
    const totalPrice = route.query.totalPrice || '未提供';
    const DateArrivalShip = route.query.DateArrivalShip || '未提供';
    const DateShuttle = route.query.DateShuttle || '未提供';
    const TimeArrivalShip = route.query.TimeArrivalShip || '未提供';
    const TimeShuttle = route.query.TimeShuttle || '未提供';
    const DateArrivalShipReturn = route.query.DateArrivalShipReturn || '未提供';
    const DateShuttleReturn = route.query.DateShuttleReturn || '未提供';
    const TimeArrivalShipReturn = route.query.TimeArrivalShipReturn || '未提供';
    const TimeShuttleReturn = route.query.TimeShuttleReturn || '未提供';
    const phone = route.query.phone || '未提供';
    const contact = route.query.contact || '未提供';
    const p2 =route.query.p2;
    const p3 =route.query.p3;
    const p4 =route.query.p4;
    const p5 =route.query.p5;
    const translatedp2 = computed(() => t(p2 as string));
    const translatedp3 = computed(() => t(p3 as string));
    const translatedp4 = computed(() => t(p4 as string));
    const translatedp5 = computed(() => t(p5 as string));

    return {
      tab,
      adult,
      child,
      totalPrice,
      DateArrivalShip,
      DateShuttle,
      TimeArrivalShip,
      TimeShuttle,
      phone,
      contact,
      translatedp2,
      translatedp3,
      translatedp4,
      translatedp5,
      TimeArrivalShipReturn,
      DateArrivalShipReturn,
      DateShuttleReturn,
      TimeShuttleReturn,
    };
  },
});
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin-bottom: 15px;
}
p {
  font-size: 16px;
  margin: 5px 0;
}
</style>
