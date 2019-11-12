INSERT INTO leads (
    name_first,
    name_last,
    phone,
    email,
    lead_status
) VALUES (
    ${name_first},
    ${name_last},
    ${phone},
    ${email},
    ${lead_status}
);

select * from leads order by lead_id;