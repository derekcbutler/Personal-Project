update leads 
set
    name_first =$1,
    name_last =$2,
    phone=$3,
    email=$4,
    lead_status=$5,
    notes=$6
    where
    lead_id = $7;

select * from leads order by lead_id;