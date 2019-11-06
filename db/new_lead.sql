INSERT INTO leads (
    name_first,
    name_last,
    phone,
    email,
    lead_status,
    notes
) VALUES (
    ${name_first},
    ${name_last},
    ${phone},
    ${email},
    ${lead_status},
    ${notes}
);

select * from leads order by lead_id;