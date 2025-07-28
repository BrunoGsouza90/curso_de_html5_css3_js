<template>

  <v-app :theme="fundo">

    <v-navigation-drawer permanent v-model="NavBar">

      <v-list>

        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Página Principal</v-list-item>
        <v-list-item prepend-icon="mdi-account">Usuários</v-list-item>

        <v-list-group value="Users">

          <template v-slot:activator="{ props }">

            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              title="Users"
            ></v-list-item>

          </template>

          <v-list-item prepend-icon="mdi-currency-usd">Faturamento</v-list-item>
          <v-list-item prepend-icon="mdi-chart-line">Relatório</v-list-item>

        </v-list-group>

      </v-list>

    </v-navigation-drawer>

    <v-app-bar flat color="blue" class="border-b">

      <v-app-bar-nav-icon @click="AbrirFecharNavBar"></v-app-bar-nav-icon>

      <v-app-bar-title>Meu App</v-app-bar-title>

      <template #append>

        <div class="d-flex ga-12 justify-center mr-8 mt-3">

          <v-icon color="black" @click="AlterarTema" icon="mdi-eye-circle"></v-icon>

          <v-badge 
          location="top right" 
          :offset-y="-8" 
          color="warning" 
          dot>

            <v-icon icon="mdi-bell"></v-icon>

          </v-badge>

          <v-badge 
          location="top right" 
          :offset-y="-8" 
          color="error" 
          content="1">

            <v-icon icon="mdi-cog"></v-icon>

          </v-badge>

          <v-badge 
          location="top right" 
          :offset-y="-8" 
          color="success" 
          content="25">

            <v-icon icon="mdi-calendar"></v-icon>

          </v-badge>

          <v-badge 
          location="top right" 
          :offset-y="-8" 
          color="primary" 
          content="99+">

            <v-icon icon="mdi-cart"></v-icon>

          </v-badge>

        </div>

        <v-menu
        transition="slide-y-transition">

        <template v-slot:activator="{ props }">

          <v-btn
            color="primary"
            v-bind="props">

            <v-avatar
            image="./assets/jorge.jpg"
            cover
            size="40"
            ></v-avatar>

          </v-btn>

        </template>

        <v-card min-width="200px">

          <v-list
          nav
          density="compact"
          :lines="false">

            <v-list-item
            prepend-icon="mdi-account-outline">

              <v-list-item-title>Meu Perfil</v-list-item-title>

            </v-list-item>

            <v-list-item
            prepend-icon="mdi-heart-outline">

              <v-list-item-title>Favoritos</v-list-item-title>

            </v-list-item>

          </v-list>

        </v-card>

      </v-menu>

      </template>

    </v-app-bar>

    <v-main>

      <v-container>

        <h1>Dashboard</h1>

        <v-card
        flat
        class="border mb-4 mt-4">

          <div class="d-flex justify-space-between m-3">

            <v-card-title>Últimos Usuários</v-card-title>

            <v-dialog width="600px">

              <template #activator="{ props }">

                <v-btn
                v-bind="props"
                icon="mdi-plus"
                color="success"
                class="mt-4 mr-4"></v-btn>

              </template>

              <v-card
              prepend-icon="mdi-account"
              title="Criar Usuário">

                <v-card-text>

                  <v-row 
                  dense>

                    <v-col
                    cols="12"
                    md="4"
                    sm="6">

                      <v-text-field
                      label="Primeiro nome*"
                      required
                      ></v-text-field>

                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    sm="6">

                      <v-text-field
                      label="Sobrenome"
                      ></v-text-field>

                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    sm="6">

                      <v-text-field
                      label="Último nome*"
                      persistent-hint
                      required
                      ></v-text-field>

                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    sm="6">

                      <v-text-field
                      label="Email*"
                      required
                      ></v-text-field>

                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    sm="6">

                      <v-text-field
                      label="Senha*"
                      type="password"
                      required
                      ></v-text-field>

                    </v-col>

                    <v-col
                    cols="12"
                    md="4"
                    sm="6">

                      <v-text-field
                      label="Confirmar Senha*"
                      type="password"
                      required
                      ></v-text-field>

                    </v-col>

                    <v-col
                    cols="12"
                    sm="6">

                      <v-select

                      :items="[
                        
                        '0-17',
                        '18-29',
                        '30-54',
                        '54+'
                        
                      ]"

                      label="Idade*"
                      required
                      ></v-select>

                    </v-col>

                    <v-col
                    cols="12"
                    sm="6">

                      <v-autocomplete

                        :items="[
                          
                          'Futebol',
                          'Filmes',
                          'Academia',
                          'Séries',
                          'Hockey',
                          'Ler',
                          'Escrever',
                          'Progamar',
                          'Viajar'
                        
                        ]"

                        label="Interesses"
                        auto-select-first
                        multiple
                      ></v-autocomplete>

                    </v-col>

                  </v-row>

                  <small class="text-caption text-medium-emphasis">Os textos indicados com <strong>*</strong> são obrigatórios!</small>

                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  
                  <v-spacer></v-spacer>

                  <v-btn
                  text="Fechar"
                  variant="plain"
                  @click="dialog = false"
                  ></v-btn>

                  <v-btn
                  color="primary"
                  text="Registrar"
                  variant="tonal"
                  @click="dialog = false"
                  ></v-btn>
                  
                </v-card-actions>

              </v-card>

            </v-dialog>

          </div>
          
          <v-table
          density="comfortable">

            <thead>

              <tr>

                <th>ID</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Telefone</th>
                <th>Cargo</th>
                <th>Ações</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>1</td>
                <td>Bruno</td>
                <td>Gonçalves</td>

                <td>

                  <v-chip variant="outlined" color="primary">Administrador</v-chip>

                </td>

                <td>(35) 991754424</td>

                <td>


                  <v-btn
                    variant="tonal"
                    color="info"
                    icon="mdi-eye"
                  ></v-btn>
                
                  <v-btn
                    variant="tonal"
                    color="warning"
                    icon="mdi-pencil"
                  ></v-btn>

                  <v-btn
                    variant="tonal"
                    color="error"
                    icon="mdi-delete"
                  ></v-btn>

                </td>
                
              </tr>

              <tr>

                <td>1</td>
                <td>Jorge</td>
                <td>Aragão</td>

                <td>

                  <v-chip variant="outlined" color="primary">Administrador</v-chip>

                </td>

                <td>(66) 974562144</td>

                <td>


                  <v-btn
                    variant="tonal"
                    color="info"
                    icon="mdi-eye"
                  ></v-btn>
                
                  <v-btn
                    variant="tonal"
                    color="warning"
                    icon="mdi-pencil"
                  ></v-btn>

                  <v-btn
                    variant="tonal"
                    color="error"
                    icon="mdi-delete"
                  ></v-btn>

                </td>

              </tr>

              <tr>

                <td>3</td>
                <td>Ana</td>
                <td>Silva</td>

                <td>

                  <v-chip variant="outlined" color="success">Gerente</v-chip>

                </td>

                <td>(11) 987654321</td>

                <td>


                  <v-btn
                    variant="tonal"
                    color="info"
                    icon="mdi-eye"
                  ></v-btn>
                
                  <v-btn
                    variant="tonal"
                    color="warning"
                    icon="mdi-pencil"
                  ></v-btn>

                  <v-btn
                    variant="tonal"
                    color="error"
                    icon="mdi-delete"
                  ></v-btn>

                </td>

              </tr>

              <tr>

                <td>4</td>
                <td>Lucas</td>
                <td>Oliveira</td>

                <td>

                  <v-chip variant="outlined" color="purple">Convidado</v-chip>

                </td>

                <td>(21) 998877665</td>

                <td>


                  <v-btn
                    variant="tonal"
                    color="info"
                    icon="mdi-eye"
                  ></v-btn>
                
                  <v-btn
                    variant="tonal"
                    color="warning"
                    icon="mdi-pencil"
                  ></v-btn>

                  <v-btn
                    variant="tonal"
                    color="error"
                    icon="mdi-delete"
                  ></v-btn>

                </td>

              </tr>

              <tr>

                <td>5</td>
                <td>Maria</td>
                <td>Pereira</td>

                <td>

                  <v-chip variant="outlined" color="purple">Convidado</v-chip>

                </td>

                <td>(31) 945678321</td>

                <td>


                  <v-btn
                    variant="tonal"
                    color="info"
                    icon="mdi-eye"
                  ></v-btn>
                
                  <v-btn
                    variant="tonal"
                    color="warning"
                    icon="mdi-pencil"
                  ></v-btn>

                  <v-btn
                    variant="tonal"
                    color="error"
                    icon="mdi-delete"
                  ></v-btn>

                </td>

              </tr>

            </tbody>

          </v-table>

        </v-card>

        <v-row>

          <v-col cols="6" md="4" lg="3">

            <v-card flat class="border">
              
              <v-img src="https://images.pexels.com/photos/33126153/pexels-photo-33126153.jpeg" class="align-end text-dark">

                <v-card-title>Brasil</v-card-title>

              </v-img>

              <v-card-subtitle class="pt-5">São Paulo</v-card-subtitle>

              <v-card-text>São Paulo é a maior cidade do Brasil e um dos principais centros financeiros, culturais e econômicos da América Latina.</v-card-text>
            
              <v-card-actions>

                <v-hover v-slot:default="{ isHovering, props }">

                  <v-btn 

                    v-bind="props"
                    :color="isHovering ? 'red-darken-2' : ''"
                    prepend-icon="mdi-information"
                    variant="tonal" 
                    class="hover-red-accent-1">

                    Ver mais

                  </v-btn>

                </v-hover>

              </v-card-actions>

            </v-card>

          </v-col>

          <v-col cols="6" md="4" lg="3">

            <v-card flat class="border">
              
              <v-img src="https://images.pexels.com/photos/33126153/pexels-photo-33126153.jpeg" class="align-end text-dark">

                <v-card-title>Brasil</v-card-title>

              </v-img>

              <v-card-subtitle class="pt-5">São Paulo</v-card-subtitle>

              <v-card-text>São Paulo é a maior cidade do Brasil e um dos principais centros financeiros, culturais e econômicos da América Latina.</v-card-text>
            
              <v-card-actions>

                <v-hover v-slot:default="{ isHovering, props }">

                  <v-btn 

                    v-bind="props"
                    :color="isHovering ? 'red-darken-2' : ''" 
                    prepend-icon="mdi-information"
                    variant="tonal"
                    class="hover-red-accent-1">

                    Ver mais

                  </v-btn>

                </v-hover>

              </v-card-actions>

            </v-card>

          </v-col>

          <v-col cols="6" md="4" lg="3">

            <v-card flat class="border">
              
              <v-img src="https://images.pexels.com/photos/33126153/pexels-photo-33126153.jpeg" class="align-end text-dark">

                <v-card-title>Brasil</v-card-title>

              </v-img>

              <v-card-subtitle class="pt-5">São Paulo</v-card-subtitle>

              <v-card-text>São Paulo é a maior cidade do Brasil e um dos principais centros financeiros, culturais e econômicos da América Latina.</v-card-text>
            
              <v-card-actions>

                <v-hover v-slot:default="{ isHovering, props }">

                  <v-btn 

                    v-bind="props"
                    :color="isHovering ? 'red-darken-2' : ''" 
                    prepend-icon="mdi-information"
                    variant="tonal"
                    class="hover-red-accent-1">

                    Ver mais

                  </v-btn>

                </v-hover>

              </v-card-actions>

            </v-card>

          </v-col>

          <v-col cols="6" md="4" lg="3">

            <v-card flat class="border">
              
              <v-img src="https://images.pexels.com/photos/33126153/pexels-photo-33126153.jpeg" class="align-end text-dark">

                <v-card-title>Brasil</v-card-title>

              </v-img>

              <v-card-subtitle class="pt-5">São Paulo</v-card-subtitle>

              <v-card-text>São Paulo é a maior cidade do Brasil e um dos principais centros financeiros, culturais e econômicos da América Latina.</v-card-text>
            
              <v-card-actions>

                <v-hover v-slot:default="{ isHovering, props }">

                  <v-btn 

                    v-bind="props"
                    :color="isHovering ? 'red-darken-2' : ''" 
                    prepend-icon="mdi-information"
                    variant="tonal"
                    class="hover-red-accent-1">

                    Ver mais

                  </v-btn>

                </v-hover>

              </v-card-actions>

            </v-card>

          </v-col>

        </v-row>

      </v-container>

    </v-main>

    <AppFooter />

  </v-app>

</template>

<script>

  import { useTheme } from 'vuetify'

  export default {

    data() {

      return {

        NavBar: false,
        fundo: "light"

      }

    },

    methods: {

      AbrirFecharNavBar() {

        this.NavBar = !this.NavBar

      },

      AlterarTema() {

        if(this.fundo == "dark") {

          this.fundo = "light"

        } else {

          this.fundo = "dark"

        }

      }

    },

    created() {

      const theme = useTheme()
      theme.global.name.value = this.fundo

    }

  }

</script>