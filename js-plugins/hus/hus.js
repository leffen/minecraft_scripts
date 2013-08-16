function hus(antall_etasjer)
{
    antall_etasjer = antall_etasjer || 10; // default number of floors is 10
    this.chkpt('hus'); // saves the drone position so it can return there later
    for (var i = 0; i < antall_etasjer; i++)
    {
        this.box(blocks.iron,10,1,10).up().box0(blocks.glass_pane,10,3,10).up(3);
    }
    return this.move('hus'); // return to where we started
};

load("../drone/drone.js");
Drone.extend('hus',hus);