// const initState = { services: [] };

// export default (state = initState, action) => {
//   switch (action.type) {
//     case "GET_SERVICES":
//       return { ...state, services: action.payload };
//     case "ADD_SERVICE":
//       return {
//         ...state,
//         services: [action.payload, ...state.services],
//       };
//     case "DELETE_SERVICE":
//       return {
//         ...state,
//         services: state.services.filter(
//           (service) => service._id !== action.payload
//         ),
//       };

//     case "EDIT_SERVICE":
//       return { ...state, [action.payload.id]: action.payload };
//     default:
//       return state;
//   }
// };
