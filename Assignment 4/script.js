var names=new Array();
names[0]="Talha";
names[1]="Shabbir";
names[2]="Usman";
names[3]="Amar";
names[4]="Abdullah";
names[5]="Ahmad";
names[6]="Haris";
names[7]="Faris";
names[8]="Haseeb";
names[9]="Anique";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}