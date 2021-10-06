<template>
  <div
    :class="[
      isFooter
        ? 'footer_subscribed'
        : isBottom
        ? 'bottom_subscribed'
        : isHeader
        ? 'header_subscribed'
        : 'NS_layout__input_row'
    ]"
  >
    <div :class="[generalFieldClass]">
      <q-input
        color="#fff"
        v-model="text"
        borderless
        class="NS_input__text-box input-field"
        :placeholder="placeholder"
        @click="clearField()"
      >
        <template v-slot:prepend></template>
      </q-input>
    </div>
    <div :class="[generalButtonClass]">
      <q-btn
        v-if="success !== true"
        square
        label="Sign Up Now"
        :loading="pending"
        :ripple="false"
        color="accent"
        @click="subscribeUser()"
        class="NS_input__button"
      />
      <q-btn
        v-if="success === true"
        disable
        icon="check"
        :ripple="false"
        color="accent"
        @click="subscribeUser()"
        class="NS_input__button"
      />
      <div class="col-12-lg">
        <div class="text-white" v-if="subscribeErr !== null">
          <div>Something went wrong, please try again later</div>
        </div>
        <div class="text-white" v-if="success">
          <div>Thanks, please check your email for a confirmation link</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Subscribe",
  props: {
    placeholder: { type: String, default: "", color: "#fff" },
    isHeader: { default: false },
    isBottom: { default: false },
    isFooter: { default: false }
  },
  data() {
    return {
      text: "",
      user: { email: "" },
      subscribeErr: null,
      generalButtonClass: "sub_button",
      generalFieldClass: "sub_field"
    };
  },
  computed: {
    ...mapState("subscriber", ["pending", "success", "result"])
  },
  methods: {
    ...mapActions("subscriber", ["subscribe", "clear"]),
    subscribeUser() {
      this.user.email = this.text;
      this.subscribe(this.user).then(
        () => {},
        error => {
          this.subscribeErr =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    clearField() {
      this.text = "";
      this.subscribeErr = null;
    }
  }
};
</script>
<style scoped>
.margin-top-10 {
  margin-top: 10px;
}
.margin-right-10 {
  margin-right: 10px;
}

.footer_subscribed {
  display: flex;
  padding: 30px 0px;
}
.bottom_subscribed {
  display: flex;
  justify-content: center;
}

.sub_field {
  width: 50%;
  margin-right: 10px;
}

@media screen and (max-width: 1600px) {
  .footer_subscribed {
    flex-direction: column;
  }
  .footer_subscribed .sub_field {
    width: 100%;
  }
  .footer_subscribed .sub_button {
    width: 80%;
    margin-top: 10px;
  }
}

@media screen and (max-width: 1024px) {
  .footer_subscribed {
    flex-direction: row;
    justify-content: center;
  }
  .footer_subscribed .sub_field {
    width: 50%;
  }
  .footer_subscribed .sub_button {
    width: 40%;
    margin-top: 0;
  }
  .header_subscribed .sub_field {
    width: 90%;
  }
  .header_subscribed .sub_field {
    width: 40%;
  }
}

@media screen and (max-width: 500px) {
  .bottom_subscribed {
    flex-direction: column;
  }
  .bottom_subscribed .sub_field {
    width: 100%;
  }
  .bottom_subscribed .sub_button {
    margin: 0 auto;
    width: 80%;
    margin-top: 10px;
  }
}

@media screen and (max-width: 415px) {
  .footer_subscribed {
    flex-direction: column;
  }
  .footer_subscribed .sub_field {
    width: 100%;
  }
  .footer_subscribed .sub_button {
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
  }
}
</style>
