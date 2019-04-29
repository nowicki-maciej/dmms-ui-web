<template>
  <div class="custom-vue-tags-input">
    <vue-tags-input
      v-model="currentValue"
      :tags="items"
      :autocomplete-items="filteredAutocompleteItems"
      :placeholder="placeholder"
      @tags-changed="onTagsChanged"
    />
  </div>
</template>

<script>
  import VueTagsInput from '@johmun/vue-tags-input';

  export default {
    name: "TagsInput",
    components: { VueTagsInput },
    props: [
      'value',
      'autocompleteSupplier',
      'autocompleteSerializer',
      'newValueCallback',
      'placeholder',
    ],
    data() {
      return {
        currentValue: '',
        items: [],
        autocompleteItems: [],
      }
    },
    mounted() {
      const vm = this;
      this.autocompleteSupplier()
        .then(response => {
          vm.autocompleteItems = response.data;
        })
        .catch(() => vm.autocompleteItems = []);
    },
    computed: {
      filteredAutocompleteItems: function () {
        return this.autocompleteItems
          .filter(item => {
            let text = this.autocompleteSerializer(item);
            return text && text.toLowerCase().indexOf(this.currentValue.toLowerCase()) !== -1;
          })
          .map(item => {
            return {
              text: this.autocompleteSerializer(item),
              item: item
            }
          });
      }
    },
    methods: {
      onTagsChanged: function (tags) {
        this.items = tags;
        let selectedItems = this.items.map(item => {
          let i = item.item;
          if (!i) {
            i = this.newValueCallback(item.text);
          }

          return i;
        });

        this.$emit('input', selectedItems);
      }
    }
  }
</script>

<style>
  .custom-vue-tags-input .vue-tags-input {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    background-color: white;
    max-width: 100%;
    margin: 15px 0;
  }

  .vue-tags-input .ti-input {
    border: none;
    width: 100%;
  }

  .vue-tags-input .ti-autocomplete {
    color: white;
    font-weight: bold;
    background-color: #244760;
  }

  .vue-tags-input .ti-tag {
    position: relative;
    width: 100%;
  }

  .vue-tags-input .ti-actions {
    position: absolute;
    right: 10px;
  }
</style>
