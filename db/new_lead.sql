INSERT INTO leads (
    name_first,
    name_last,
    phone,
    email,
    status,
    notes
) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6
);

select * from leads order by lead_id;