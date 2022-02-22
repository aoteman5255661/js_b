#£¡/bin/bash
for a in `seq 1 10`
do  
    echo 'start seq ' $a
    node 1.js
    echo 'end seq sleep 300s' $a
    sleep 300
done
echo 'end end end end end'