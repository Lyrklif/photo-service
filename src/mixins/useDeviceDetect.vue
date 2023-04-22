<script lang="ts">
import { computed } from "vue";

export default function () {
  type TDevice = { isDesktop: boolean; isTablet: boolean; isMobile: boolean };

  const device = computed((): TDevice => {
    const platform = navigator.platform.toLowerCase();

    const isDesktop = /mac|win|linux/i.test(platform);
    const isTablet = /tablet|ipad/i.test(platform);
    const isMobile =
      /(android|webos|iphone|ipad|ipod|blackberry|windows phone)/.test(
        platform
      );

    return { isDesktop, isTablet, isMobile };
  });

  return {
    device,
  };
}
</script>
