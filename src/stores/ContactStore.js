import { defineStore } from 'pinia';

export const useContactStore = defineStore('contacts', {
  // State
    state: () => ({ 
      // favourites: [],
        deletedContacts: [],
        contact:{},
        contacts: [
          {
            id: 1,
            name: "Leanne Graham",
            email: "Sincere@april.biz",
            address: {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
              geo: {
                lat: "-37.3159",
                lng: "81.1496"
              }
            },
            phone: "1-770-736-8031 x56442",
            isFav: false,
          },
          {
            id: 2,
            name: "Ervin Howell",
            email: "Shanna@melissa.tv",
            address: {
              street: "Victor Plains",
              suite: "Suite 879",
              city: "Wisokyburgh",
              zipcode: "90566-7771",
              geo: {
                lat: "-43.9509",
                lng: "-34.4618"
              }
            },
            phone: "010-692-6593 x09125",
            isFav: false,
          },
          {
            id: 3,
            name: "Clementine Bauch",
            email: "Nathan@yesenia.net",
            address: {
              street: "Douglas Extension",
              suite: "Suite 847",
              city: "McKenziehaven",
              zipcode: "59590-4157",
              geo: {
                lat: "-68.6102",
                lng: "-47.0653"
              }
            },
            phone: "1-463-123-4447",
            isFav: false,
          },
          {
            id: 4,
            name: "Patricia Lebsack",
            email: "Julianne.OConner@kory.org",
            address: {
              street: "Hoeger Mall",
              suite: "Apt. 692",
              city: "South Elvis",
              zipcode: "53919-4257",
              geo: {
                lat: "29.4572",
                lng: "-164.2990"
              }
            },
            phone: "493-170-9623 x156",
            isFav: false,
          },
          {
            id: 5,
            name: "Chelsey Dietrich",
            email: "Lucio_Hettinger@annie.ca",
            address: {
              street: "Skiles Walks",
              suite: "Suite 351",
              city: "Roscoeview",
              zipcode: "33263",
              geo: {
                lat: "-31.8129",
                lng: "62.5342"
              }
            },
            phone: "(254)954-1289",
            isFav: false,
          },
        ],
    }),

    // Actions
    actions: {
      toggleFav(id){
        this.contacts = this.contacts.map(contact => {
          if(contact.id === id){
            contact.isFav = !contact.isFav;
          }
          return contact;
        });
      },
      editContact(contact){
        this.contact = contact;
      },
      deleteContact(id){
        this.deletedContacts.push(...this.contacts.filter( (item) => item.id === id ));
        this.contacts = this.contacts.filter( contact => contact.id !== id);
        this.contacts.map( contact => {
          if(contact.id === id) {
            contact.isFav = false;
          }
          return contact;
        })
      },
      restoreContact(contact){
        this.contacts.push(contact);
        this.deletedContacts = this.deletedContacts.filter( (item) => item.id !== contact.id);
      },
      createContact(contact){
        const id = this.totalContacts + 1;
        const newContact = {
          id,
          ...contact,
        }
        // console.log(newContact);
        this.contacts.unshift(newContact);
      }
    },

    // Getters
    getters: {
      totalContacts: (state) => {
        return state.contacts.length
      },
      favourites: (state) => state.contacts.filter(item => item.isFav),
      totalFavourites: (state) => state.contacts.filter(item => item.isFav).length,
      totalDeletedContacts: (state) => state.deletedContacts.length
    }
});