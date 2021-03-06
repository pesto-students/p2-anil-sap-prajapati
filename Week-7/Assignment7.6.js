function Queue() {

	this.s1 = [];
	this.s2 = [];


this.enQueue = (x) =>
{
	
	// Move all elements from s1 to s2
	while (this.s1.length != 0)
	{
		this.s2.push(this.s1.pop());
		//s1.pop();
	}

	// Push item into s1
	this.s1.push(x);

	// Push everything back to s1
	while (this.s2.length != 0)
	{
		this.s1.push(this.s2.pop());
		//s2.pop();
	}
}


this.deQueue= () =>
{
	

	if (this.s1.length == 0)
	{
	console.log("Q is Empty");
	}


	let x = this.s1[this.s1.length - 1];
	this.s1.pop();
	return x;
}
}


let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());

