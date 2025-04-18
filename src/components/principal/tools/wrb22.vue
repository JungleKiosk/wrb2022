<script>
import horizonCombo from "../../../data/wrb22/horizon_combo.json";
import horizonDataRaw from "../../../data/codelist/code_horizonWrb22.json";

export default {
  name: "HorizonH",
  data() {
    const masterData =
      horizonDataRaw.tables.find((t) => t.collection === "MasterSymbol")
        ?.data || [];
    const suffixData =
      horizonDataRaw.tables.find((t) => t.collection === "Suffixes")?.data ||
      [];

    return {
      combinations: horizonCombo.tables[0].data, // { master: "H", suffixes: [...] }
      masterDetails: masterData,
      suffixDetails: suffixData,
      selectedMaster: null,
      selectedSuffix: null,
    };
  },
  computed: {
    suffixOptions() {
      const entry = this.combinations.find(
        (c) => c.master === this.selectedMaster
      );
      return entry ? entry.suffixes : [];
    },
    masterInfo() {
      return this.masterDetails.find((m) => m.label === this.selectedMaster);
    },
    suffixInfo() {
      return this.suffixDetails.find((s) => s.label === this.selectedSuffix);
    },
  },
};
</script>

<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-4">Designazioni orizzonte</h2>

    <!-- ComboBox Master -->
    <div class="mb-4">
      <label class="font-semibold">Master:</label>
      <select v-model="selectedMaster" class="border rounded p-1 ml-2">
        <option disabled value="">Seleziona un master</option>
        <option
          v-for="item in combinations"
          :key="item.master"
          :value="item.master"
        >
          {{ item.master }}
        </option>
      </select>
    </div>

    <!-- ComboBox Suffix -->
    <div v-if="selectedMaster" class="mb-4">
      <label class="font-semibold">Suffisso:</label>
      <select v-model="selectedSuffix" class="border rounded p-1 ml-2">
        <option disabled value="">Seleziona un suffisso</option>
        <option v-for="suf in suffixOptions" :key="suf" :value="suf">
          {{ suf }}
        </option>
      </select>
    </div>

    <!-- Dettaglio -->
    <!-- Dettaglio Master -->
    <div v-if="masterInfo" class="mt-4 p-4 border rounded bg-blue-50">
      <h3 class="font-bold text-blue-700">Master: {{ masterInfo.label }}</h3>
      <p class="text-sm text-gray-700">
        Descrizione: {{ masterInfo.description }}
      </p>
    </div>

    <!-- Dettaglio Suffix -->
    <div v-if="suffixInfo" class="mt-4 p-4 border rounded bg-green-50">
      <h3 class="font-bold text-green-700">Suffisso: {{ suffixInfo.label }}</h3>
      <p class="text-sm text-gray-700">
        Descrizione: {{ suffixInfo.description }}
      </p>
    </div>
  </div>
</template>