export function getValueList(arr,val){
	return [...new Set(arr.map((array) => (array[val])))].sort()
}

