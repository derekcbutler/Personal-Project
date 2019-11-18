CREATE TABLE leads(
    lead_id serial PRIMARY KEY,
    name_first VARCHAR(100),
    name_last VARCHAR(100),
    phone TEXT,
    email TEXT,
    lead_status TEXT,
    notes VARCHAR(300)
);

CREATE TABLE bundle(
    bundle_id serial PRIMARY KEY,
    bundle_price INTEGER,
    bundle_percent TEXT
);

CREATE TABLE selected_bundle(
    lead_id INT REFERENCES leads(lead_id),
    bundle_id INT REFERENCES bundle(bundle_id)
);

CREATE TABLE admin(
    admin_id serial PRIMARY KEY,
    admin_username VARCHAR(100),
    admin_password VARCHAR(100),
    admin_email TEXT
);

select * from leads full join selected_bundle on selected_bundle.lead_id = leads.lead_id 
full join bundle on bundle.bundle_id = selected_bundle.bundle_id where leads.lead_id = $1;