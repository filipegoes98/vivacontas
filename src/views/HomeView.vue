<template>
  <div class="expenses">
    <div id="modal">
      <h5>Cadastrar Entrada / Despesa</h5>
      <div class="register">
        <div class="column">
          <label for="TypeRegister"> Tipo de cadastro</label>
          <select class="form-control" name="TypeRegister" v-model="typeExpense">
            <option value="0" disabled selected>Selecione sua opção</option>
            <option value="1">Entrada</option>
            <option value="2">Despesa</option>
          </select>
        </div>
        <div class="column">
          <label for="TypeRegister">Valor</label>
          <input class="form-control" type="number" v-model="myInputModel" />
        </div>
        <div class="column">
          <label for="TypeRegister">Identificação </label>
          <input class="form-control" type="text" v-model="id" />
        </div>
      </div>
      <div class="save">
        <button @click="saveExpenses" class="btn btn-success">Cadastrar</button>
      </div>
    </div>
    <hr />
    <div id="listExpenses">
      <table v-if="expenses.length != 0">
        <tr>
          <th>Identificação</th>
          <th>Valor</th>
          <th>Data do Cadastro</th>
        </tr>
        <tr
          v-for="item in expenses"
          :key="item.type"
          :class="{ in: item.type == 1, outReg: item.type == 2 }"
        >
          <td>{{ item.id }}</td>
          <td>{{ "R$ " + item.value.toFixed(2).toString().replace(".", ",") }}</td>
          <td>{{ item.date | moment("DD/MM/YYYY HH:mm") }}</td>
          <td>
            <button type="button" class="btn btn-primary" @click="Edit(item.id)">
              Alterar
            </button>
            <button class="btn btn-danger" @click="Del(item.id)">Apagar</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeExpense: 0,
      myInputModel: "",
      id: "",
      expenses: [],
    };
  },

  methods: {
    saveExpenses() {
      if (this.typeExpense == 0) {
        this.$swal('Campo "Tipo de cadastro" não preenchido corretamente');
        return;
      } else if (this.myInputModel == "") {
        this.$swal('Campo "Valor" não preenchido corretamente');
        return;
      } else if (this.id == "") {
        this.$swal('Campo "Identificação" não preenchido corretamente');
        return;
      }
      let itemExists = this.expenses.find((exp) => exp.id == this.id);
      console.log(itemExists);
      // console.log(Object.keys(itemExists).length);
      if (this.expenses.length > 0 && itemExists != undefined) {
        let index = this.expenses.findIndex((exp) => exp.id == this.id);
        // console.log(index);
        this.expenses[index].id = this.id;
        this.expenses[index].value = new Number(this.myInputModel);
        this.expenses[index].type = this.typeExpense;
        this.expenses[index].date = new Date();
      } else {
        this.expenses.push({
          id: this.id,
          value: new Number(this.myInputModel),
          type: this.typeExpense,
          date: new Date(),
        });
      }
      this.Save("Item Cadastrado");
      this.CleanForm();
    },
    Save(message) {
      this.$eventHub.$emit("Teste", this.expenses);
      this.$swal(message);
    },
    CleanForm() {
      this.id = "";
      this.myInputModel = "";
      this.typeExpense = 0;
    },

    Del(delItem) {
      let teste = this.expenses.findIndex((item) => item.id == delItem);

      if (teste == 0) {
        this.expenses.shift();
      } else {
        let newExpenses = this.expenses.filter((exp) => exp.id != delItem);

        this.expenses = Array.from(newExpenses);
      }
      this.Save("Item apagado com sucesso!");
      console.log(this.expenses);
    },
    Edit(editItem) {
      let item = this.expenses.find((exp) => exp.id == editItem);
      this.id = item.id;
      this.myInputModel = item.value;
      this.typeExpense = item.type;
    },
  },
};
</script>

<style></style>
