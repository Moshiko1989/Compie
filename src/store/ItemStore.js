// Extentions
import { computed, observable, action } from 'mobx';
// Services
import ItemService from '../services/ItemService';

class ItemObservableStore {
	// State 
	@observable items = null;
	@observable userCoor = null;
	@observable userAddress = null;
	@observable branches = null;

	// Observing functions
	@computed get itemsGetter() {
		return this.items;
	}

	@computed get userCoorGetter() {
		return this.userCoor;
	}

	@computed get userAddressGetter() {
		return this.userAddress;
	}
	
	@computed get branchesGetter() {
		return this.branches;
	}

	// Changing State syncronously
	@action _setItems = items => {
		this.items = items;
	}

	@action _setUserCoor = coor => {
		this.userCoor = coor;
	}

	@action _setuserAddress = address => {
		this.userAddress = address;
	}

	@action _setBranches = branch => {
		this.branches = branch;
	}

	// Accesses from components & pages
	loadItems = () => {
		return ItemService.loadItems()
			.then(this._setItems);
	}

	setUserCoor = coor => {
		this._setUserCoor(coor)
	}

	setUserAddress = address => {
		this._setuserAddress(address)
	}

	setBranches = branch => {
		this._setBranches(branch)
	}
}

const ItemStore = new ItemObservableStore();
export default ItemStore;