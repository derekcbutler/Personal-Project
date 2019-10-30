INSERT INTO admin( admin_username, admin_password)
VALUES(
    $1,
    $2
)

returning *;