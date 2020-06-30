<template>
    <div>
         <b-navbar :toggleable="BNavBar.toggleable" :type="BNavBar.type" :variant="BNavBar.variant">
             <div class="toogle-btn">
                <span @click="toogle()">&#9776;</span>
            </div>
            <b-navbar-brand href="/"><img class="logo" src="../assets/logo.png" alt=""></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
        
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" v-for="item in profile" :key="item.id">
                <template>
                <div class="h3 m-auto mr-2">
                    <b-icon icon="question-circle" class="mr-2"></b-icon>
                    <b-icon icon="gear"></b-icon>
                    <b-icon icon="grid3x3-gap-fill"></b-icon>
                </div>
                </template>
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                    <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
                </template>
               <b-dropdown-item-button>
         <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
         Locked <span class="sr-only">(Click to unlock)</span>
      </b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-group header="Choose options" class="small">
        <b-dropdown-item-button>
           <b-icon icon="blank" aria-hidden="true"></b-icon>
           Option A <span class="sr-only">(Not selected)</span>
        </b-dropdown-item-button>
        <b-dropdown-item-button>
           <b-icon icon="check" aria-hidden="true"></b-icon>
           Option B <span class="sr-only">(Selected)</span>
        </b-dropdown-item-button>
         <b-dropdown-item-button>
           <b-icon icon="blank" aria-hidden="true"></b-icon>
           Option C <span class="sr-only">(Not selected)</span>
        </b-dropdown-item-button>
      </b-dropdown-group>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>Some action</b-dropdown-item-button>
      <b-dropdown-item-button>Some other action</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button variant="danger">
        <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
        Delete
      </b-dropdown-item-button>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: { header: Object },
    data() {
        return { 
            items: [
                {id: 1, title: 'option1', link: 'profile'},
                {id: 2, title: 'option2', link: 'home'},
                {id: 3, title: 'option3', link: 'profile'}
            ],
            BNavBar: {
                toggleable: 'lg',
                type: 'light',
                variant: 'light'
            },
            profile: [
                {
                    id: '72288959',
                    fullName: 'Ismael E. Lastre Alvarez',
                    role: 'SuperAdmin',
                    profile: 'Perfil',
                    profileLink: 'profile'
                }
            ]
        }
    },
    methods: {
        toogle() {
            this.$store.commit("SideBar/SET_TOOGLEBTN");            
        }
    }
}
</script>
<style lang="scss" scoped>
.logo{
    height: 50px;
    width: 150px;
}
.toogle-btn {
        position: relative;
        left: 0px;
        top:auto;
        cursor: pointer;
        :hover {
            background: rgba(224, 224, 224, .8);
            border: 0.5px solid rgba(236, 233, 233, .8);
        }
        span {
            display: block;
            width: 50px;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            border: 1px solid  rgba(32, 206, 233, 0.5);
        }
    }
</style>