<script>
    class archModule{
        packageForJSON() {
            console.log("not implemented yet");
        };
    };

    class workersModule extends archModule{

    };
    class workerRecord{
        constructor(role, name, surname, phoneNumber, mail){
            this.role = role;
            this.name = name;
            this.surname = surname;
            this.phoneNumber = phoneNumber;
            this.mail = mail;
        }
    };
</script>

<div id="arch-container">
    <p>arch</p>
</div>

<style>
    #arch-container{
        width: 100%;
        height: 100%;
    }
</style>