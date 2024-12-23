const asciiArts = [
    `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⣤⣤⣤⣤⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣶⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣿⣿⣿⣿⣿⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣀⣙⢿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠻⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡟⠹⠿⠟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡿⠋⡬⢿⣿⣷⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠰⡇⢸⡇⢸⣿⣿⣿⠟⠁⢀⣬⢽⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣧⣈⣛⣿⣿⣿⡇⠀⠀⣾⠁⢀⢻⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣧⣄⣀⠙⠷⢋⣼⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁
⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀
⠸⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀
⠀⢹⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀
⠀⠀⠹⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀
⠀⠀⠀⠙⣿⣿⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠛⠛⠛⠛⠛⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`,
    `
⢕⢕⢕⢕⢕⠅⢗⢕⠕⣠⠄⣗⢕⢕⠕⢕⢕⢕⠕⢠⣿⠐⢕⢕⢕⠑⢕⢕⠵⢕
⢕⢕⢕⢕⠁⢜⠕⢁⣴⣿⡇⢓⢕⢵⢐⢕⢕⠕⢁⣾⢿⣧⠑⢕⢕⠄⢑⢕⠅⢕
⢕⢕⠵⢁⠔⢁⣤⣤⣶⣶⣶⡐⣕⢽⠐⢕⠕⣡⣾⣶⣶⣶⣤⡁⢓⢕⠄⢑⢅⢑
⠍⣧⠄⣶⣾⣿⣿⣿⣿⣿⣿⣷⣔⢕⢄⢡⣾⣿⣿⣿⣿⣿⣿⣿⣦⡑⢕⢤⠱⢐
⢠⢕⠅⣾⣿⠋⢿⣿⣿⣿⠉⣿⣿⣷⣦⣶⣽⣿⣿⠈⣿⣿⣿⣿⠏⢹⣷⣷⡅⢐
⣔⢕⢥⢻⣿⡀⠈⠛⠛⠁⢠⣿⣿⣿⣿⣿⣿⣿⣿⡀⠈⠛⠛⠁⠄⣼⣿⣿⡇⢔
⢕⢕⢽⢸⢟⢟⢖⢖⢤⣶⡟⢻⣿⡿⠻⣿⣿⡟⢀⣿⣦⢤⢤⢔⢞⢿⢿⣿⠁⢕
⢕⢕⠅⣐⢕⢕⢕⢕⢕⣿⣿⡄⠛⢀⣦⠈⠛⢁⣼⣿⢗⢕⢕⢕⢕⢕⢕⡏⣘⢕
⢕⢕⠅⢓⣕⣕⣕⣕⣵⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣷⣕⢕⢕⢕⢕⡵⢀⢕⢕
⢑⢕⠃⡈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⢕⢕⢕
`,
    `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⠛⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠉⠀⣠⣶⣶⣄⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⣀⣶⣿⣿⣿⣿⣿⣆⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠁
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠁⢀⣤⣶
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⢀⣠⣾⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠋⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠈⠉⠉⠙⠛⠛⠻⢿⣿⡿⠟⠁⠀⣀⣴⣿⣿⣿⣿⣿⠟
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⣉⣡⠀⣠⣴⣶⣶⣦⠄⣀⡀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⡿⢃⣾
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⣾⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⣠⣾⡟⢡⣾⣿⣿⣿⡿⢋⣴⣿⡿⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⢡⣾⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠃⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣼⣿⡟⣰⣿⣿⣿⣿⠏⣰⣿⣿⠟⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢚⣛⢿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⠸⣿⠟⢰⣿⣿⣿⣿⠃⣾⣿⣿⠏⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⣾
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠻⠻⠃⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⢉⣴⣿⣿⣿⣿⡇⠘⣿⣿⠋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡘⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣿⣿⣿⠁⢀⣀⠀⢀⣾⣿⣿⣿⣿⣿⣿⠟⠉⠉⠉⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌
⣿⣿⣿⣿⣿⣿⡿⠁⣀⣤⡀⠀⠈⠻⢿⠀⣼⣿⣷⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠟⠛⠙⠃⠀⣿⣿⣿⠀⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⡿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠁⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣿
⣿⠟⠁⢀⣴⣶⣶⣾⣿⣿⣿⣿⣶⡐⢦⣄⠀⠀⠈⠛⢿⣿⣿⣿⣿⡀⠀⠀⠀⠀⢀⣼⡿⢛⣩⣴⣶⣶⣶⣶⣶⣶⣭⣙⠻⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿
⠁⠀⣴⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣦⡙⠻⣶⣄⡀⠀⠈⠙⢿⣿⣷⣦⣤⣤⣴⣿⡏⣠⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣌⠻⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿
⠀⢸⣿⣿⣿⠋⣠⠔⠀⠀⠻⣿⣿⣿⣿⢉⡳⢦⣉⠛⢷⣤⣀⠀⠈⠙⠿⣿⣿⣿⣿⢸⣿⡄⠻⣿⣿⠟⡈⣿⣿⣿⣿⣿⢉⣿⣧⢹⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿
⠀⢸⣿⣿⡇⠠⡇⠀⠀⠀⠀⣿⣿⣿⣿⢸⣿⣷⣤⣙⠢⢌⡛⠷⣤⣄⠀⠈⠙⠿⣿⣿⣿⣿⣷⣦⣴⣾⣿⣤⣙⣛⣛⣥⣾⣿⣿⡌⣿⣿⣿⣷⣤⣀⣀⣀⣠⣴⣿⣿⣿⣿⣿⣿⣿
⠀⢸⣿⣿⣷⡀⠡⠀⠀⠀⣰⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣦⣌⡓⠤⣙⣿⣦⡄⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⢸⣿⣿⣿⣿⣶⣤⣴⣾⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣷⠀⣶⡄⠀⠈⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⢸⣿⣿⣿⣿⣿⠟⠻⣿⣿⡏⣉⣭⣭⡘⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⡇⢸⡇⢠⡀⠈⠙⠋⠉⠉⠉⠉⠛⠫⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⢸⣿⣿⠛⣿⣿⣀⣀⣾⡿⢀⣿⣿⣿⢻⣷⣦⢈⡙⠻⢿⣿⣿⣿⣿⣿⣿⣿⠀⣿⡇⢸⡇⢸⣿⠀⣦⠀⠀⠶⣶⣦⣀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⢸⣿⣿⣦⣈⡛⠿⠟⣋⣤⣾⣿⣿⣿⣸⣿⣿⢸⡇⢰⡆⢈⡙⠻⢿⣿⣿⣿⠀⢿⡇⢸⡇⢸⣿⢠⣿⡇⣿⡆⢈⡙⠻⠧⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⣝⠛⢿⣿⣿⣿⣿⣿⣿⠟⣁⠀⠀⢈⠛⠿⢸⣇⢸⡇⢸⡇⣶⣦⣌⡙⠻⢄⡀⠁⠘⠇⠘⣿⢸⣿⡇⣿⡇⢸⡛⠷⣦⣄⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⡆⠀⠈⠳⢶⣤⣍⡉⠉⣩⣤⣤⡉⠻⢶⣤⣀⠂⠀⠉⠘⠇⢸⡇⣿⣿⣿⣿⣷⣦⣍⡑⠢⣄⠀⠈⠈⠻⠇⣿⡇⢸⣿⣷⣾⣿⡇⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣷⣦⣄⡀⠈⠉⠛⠶⢄⡉⠻⠿⣷⣦⣌⡙⠷⢶⣄⡀⠀⠈⠁⠙⢿⣿⣿⣿⣿⣿⣿⣷⣦⣍⡒⠤⣀⠀⠈⠃⢸⣿⣿⣿⣿⣷⠀⢸⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⠿
⣿⣿⣿⣿⣿⣷⣦⣄⡀⠀⠈⠉⠂⠄⢙⣿⣿⣷⣦⣈⠙⠳⢦⣄⡀⠠⠈⠛⠿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣌⡐⠄⢸⣿⣿⣿⣿⣿⡇⠀⣿⠿⣿⣿⣿⣿⣷⣌⠻⣿⣿⣿⡿⢰⣦⣤
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣄⡀⠀⠀⠀⠉⠛⠛⠛⠿⠷⣤⣈⠛⠷⢤⣈⡂⢄⡉⠻⠿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣌⡛⠿⣿⣿⡇⠀⢿⣷⣌⡛⠿⠿⠏⣼⣷⣤⣉⣉⣀⣼⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡷⠀⢀⣤⣶⣦⣤⣤⣄⡈⠙⠻⠖⠀⣉⣩⣤⣤⣤⣤⣤⣤⣀⡈⠉⠙⠻⣿⣿⣿⣿⣶⡄⠉⠀⠀⣸⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⣾⣿⣿⣿⣿⣿⣿⣿⠀⠀⣴⣿⣿⣿⣿⣿⠟⣩⣽⣿⣿⣿⣷⣦⣀⠀⠙⢻⣿⣿⠇⠀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⠏⣵⣾⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠉⠻⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⡇⠘⣿⣿⡿⣡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⣦⡀⠀⠸⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⢀⣙⣟⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣘⣛⣻⣦⢀⣀⣙⣛⣛⣛⣛⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
`,
    `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⡏⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿
⣿⣿⣿⣿⣿⣿⠀⠀⠀⠈⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⣿
⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠙⠿⠿⠿⠻⠿⠿⠟⠿⠛⠉⠀⠀⠀⠀⠀⣸⣿
⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⢰⣹⡆⠀⠀⠀⠀⠀⠀⣭⣷⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠈⠉⠀⠀⠤⠄⠀⠀⠀⠉⠁⠀⠀⠀⠀⢿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⢾⣿⣷⠀⠀⠀⠀⡠⠤⢄⠀⠀⠀⠠⣿⣿⣷⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡀⠉⠀⠀⠀⠀⠀⢄⠀⢀⠀⠀⠀⠀⠉⠉⠁⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿
`,
    `
⠀⠀⠀⠀⠀⠀⠀⣀⡤⠔⠒⠟⠫⠍⡉⢉⠉⡉⢉⠉⡉⢉⠉⡉⢉⠉⡉⢉⠉⡉⢉⠉⣉⠉⡉⢉⠉⠻⠕⠒⠠⢤⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣠⠔⠋⡀⢄⢂⣅⡮⠵⠦⠷⠎⠖⠱⠮⠦⠵⣌⣂⠅⢣⠘⡄⢃⠎⡐⢣⠑⡄⢣⠑⡊⡌⠱⡈⢆⡉⠄⡨⠕⡢⣄⠀⠀⠀⠀
⠀⠀⣠⡾⢃⠐⣬⠴⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠳⢴⡈⠒⡌⠜⡠⢃⠜⡠⢃⡱⢈⡱⢈⠆⡘⠤⡁⢆⡉⠦⡑⢄⠀⠀
⢀⡾⡁⡒⢬⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢧⡈⢒⠡⢊⠜⡠⢃⠴⡁⢆⠣⡘⢄⠣⡘⢄⠒⠤⠙⠎⢆⠀
⣿⢱⠃⣼⠃⠀⠀⠀⢀⡤⢾⣿⣿⣦⠀⢀⡿⢿⣷⣦⣄⠀⠀⠀⠀⠀⠀⠀⢳⡁⢣⠡⢊⡔⢡⠢⡑⢌⠢⠱⡈⢆⠱⡈⡜⢠⠍⡘⢆⢇
⡏⡟⣨⡇⠀⠀⣠⠾⣿⣷⣾⣿⣿⣿⡇⢸⣷⣾⣿⣿⣿⣿⠢⡀⠀⠀⠀⠀⠈⣇⠢⢅⠣⡘⢄⠣⡘⢢⢉⡱⠌⡌⢆⠱⡈⢆⡘⠰⡘⢸
⡇⡇⡸⡇⠀⠀⣇⠀⠈⠻⠿⠿⠿⠛⡇⢸⠻⠿⠿⠿⠛⠁⠀⡇⠀⠀⠀⠀⠀⡿⢐⠊⡔⢡⠊⡔⠱⡈⠆⠴⡁⠎⡄⢣⠘⠤⢌⠱⠐⣸
⣿⣧⡐⢻⡀⠀⠈⠢⢄⣀⣀⣀⡠⠞⠀⠈⠢⣀⡀⣀⣀⡠⠞⠀⠀⠀⠀⠀⣸⠃⠬⡘⢄⠣⡘⢌⠱⠨⠜⢢⠡⢃⠜⡠⣉⠒⡌⢂⡅⣾
⠫⣧⡣⣂⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠁⢎⠱⡈⢆⠱⢌⢂⠣⣉⠜⢢⠡⢋⠔⡡⢂⠱⣈⣼⡼⠓
⠀⠙⣳⣷⠂⣾⠀⠀⠀⠀⠀⠀⠰⠿⠿⠿⠷⠆⠀⠀⠀⠀⠀⠀⠀⠀⣸⠤⣉⠦⡱⢌⢆⠣⡌⢦⠱⣄⠚⡤⢃⠎⡴⠡⢎⠔⣎⣾⠀⠀
⠀⠀⢸⢻⡇⢼⠀⠀⠀⠀⣀⣠⡀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⠀⢺⠑⡌⢒⡑⢊⡌⢓⡘⢂⠓⡌⠓⡌⢃⠞⡰⢉⠎⡘⣏⠖⠀⠀
⠀⠀⢸⢸⡇⠼⠤⠖⡻⠭⠵⠞⠁⠀⠀⠀⠀⠀⠀⠀⠈⠻⠽⠷⠲⣤⣼⠡⡘⠄⢎⠢⡘⠤⢌⠱⡨⠰⡉⡔⡉⢆⠱⣈⠒⠄⣏⠆⠀⠀
⠀⠀⢸⢸⡇⢢⠑⡌⢌⠩⡉⣭⠭⠭⠭⠽⠗⠿⠽⠭⠭⡏⠩⡉⠥⡀⢆⠰⢡⠉⡆⠱⢌⠒⡌⢢⢁⠇⡱⡀⠧⡈⠖⡠⢍⠂⣇⠃⠀⠀
⠀⠀⢸⢸⡇⢢⠑⡌⢢⠑⣰⣾⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⠡⡘⠤⡑⠌⢢⢁⡚⢌⠱⢨⠘⡄⠣⢌⠢⡑⠌⢆⡑⢊⠥⡈⠆⡣⠇⠀⠀
⠀⠀⢸⢸⡇⢢⣥⣘⣄⣡⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢷⣤⣧⠼⢺⠀⠖⣈⠆⣉⠆⡱⢈⡱⢊⠔⡩⠘⡄⢎⠡⡂⠕⡈⡇⠇⠀⠀
⠀⠀⢸⣸⡇⣹⠀⠈⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢈⡱⠄⢎⠰⢌⡐⢣⠐⣡⠊⡔⢩⡐⢊⠥⢌⠱⡀⣏⡅⠀⠀
⠀⠀⢸⣾⠇⣺⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠂⡤⢉⠆⡃⠦⡘⠤⠩⢄⠣⡘⠤⢌⡡⢊⠄⢣⠐⡇⡆⠀⠀
⠀⠀⢸⣟⠂⢽⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠒⡌⢢⠱⣈⠱⣈⠌⢣⡘⢄⠣⠜⡠⠆⠥⢊⠅⡊⡧⡇⠀⠀
⠀⠀⠰⡗⡉⡄⢳⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⠋⡔⠨⢆⠱⢠⠃⠤⢋⠔⡈⠦⡑⢊⠔⡉⠦⢡⠊⢴⢣⡇⠀⠀
⠀⠀⠀⠳⡗⢬⡐⣈⠓⡒⠲⢒⠒⠖⡲⠒⡖⠲⡒⠖⠒⠶⠶⢒⠋⠤⢊⠔⡱⢈⠆⡅⢊⠱⡈⢆⡑⢢⠑⡌⢢⠑⡌⢢⠑⣢⠏⠀⠀⠀
⠀⠀⠀⠀⠈⠓⠬⣤⣃⣘⣓⣚⣚⣒⣁⣓⣐⣃⣒⣉⣚⣒⣒⣒⣙⣒⣓⣘⣐⣒⣘⣐⣃⣒⣑⣒⣐⣒⣘⣐⣒⣸⣤⡥⠞⠁⠀⠀⠀⠀
`,
    `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡏⠀⠹⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣻
⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠘⢦⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⢠⡇⢰⣷⣤⣤⣤⣤⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣟⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⡿⠀⢸⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠿⣿⣿⣿⣿⣿⣦⡀⠀⢳⣄⠀⠀⠀⠀⠀⠹
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⡄⠀⣻⣷⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠃⠀⣿⣿⠁⠀⠀⢀⣼
`,
    `
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⣿⣷⣶⣶⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣷⣤⣤⣴⣶⣶⣶⣶⣶⣶⣶⣶⣶⣦⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⡿⢛⣿⣿⠿⠟⠋⠉⠁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⠿⠿⣶⣦⣄⣀⣴⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣾⠿⠋⠁⠀⠀⠀⠠⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⠟⠁⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢦⡄⠀⠻⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢤⡀⠀⠀⠀⠀⠀⠀⠀⠙⢷⡀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⡀⠀⠀⠀⢠⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠈⠻⣦⣾⣿⣿⠿⢿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⠃⠀⠀⠀⠀⣠⠂⠀⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣧⡀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣧⠘⢿⣿⣿⣿⣿⣆⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⣿⣿⠇⠀⠀⠀⠀⢠⡟⠀⠀⢀⣴⣿⡇⠀⠀⠀⠀⠀⠀⣴⡄⠀⠀⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣇⠘⢿⣿⣿⣿⣿⣆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢰⣿⡟⠀⠀⠀⠀⠀⣼⠃⠀⢠⣾⠋⠸⣿⠀⡄⠀⠀⠀⠀⣿⣿⣄⠀⠀⢠⡀⠀⠸⣷⡀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡄⢘⣿⣿⣿⣿⣿⠂⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⣷⠄⠀⠀⠀⢰⣿⠀⣰⡿⠧⠤⣤⣿⡆⣷⠀⠀⠀⠀⣿⠉⢿⣦⠀⠘⣿⣦⡀⢻⣷⡀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣷⣿⣿⣿⣿⡿⠁⠀⠀⠀
⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⢸⣿⣰⡿⠁⠀⠀⠀⠘⣿⣿⣇⠀⠀⠀⣿⠀⠠⣿⣷⡶⣿⡿⢿⣮⣿⣇⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⡂⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣾⡿⢿⣿⠀⠀⠀⠀⣸⣿⣿⣷⣿⣷⣦⣄⠀⣹⣿⣿⡄⠀⠀⣿⠀⠀⠀⠘⠿⣿⣧⠈⠻⣿⣿⡀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⠏⠘⣿⣇⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣿⠇⢸⡿⢾⡄⠀⠀⣿⣿⠋⢱⣿⣿⣿⣿⣷⡟⢻⣿⣷⡀⠀⣿⡀⢠⣤⢀⣠⣬⣿⣤⣄⡘⢿⡇⠀⠀⠀⢸⡀⠀⢿⣿⣿⣿⣇⠀⠀⢿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣿⠀⢸⡇⢸⡇⠀⠀⣿⣿⠀⣿⣿⣿⣿⣯⣉⣿⠀⠹⣿⣿⡄⢹⡇⢈⣴⣿⣿⣿⣿⣿⡿⣿⣿⣇⠀⠀⠀⢸⡇⠀⢸⣿⣿⣿⣿⠀⠀⢸⣿⠂⠀⠀⠀
⠀⠀⠀⠀⣿⡏⠀⣸⡇⣸⣿⡀⠀⣿⣷⠀⢻⣿⠛⠉⠻⣿⡇⠀⠀⠈⢿⣿⣼⣿⠘⣿⣿⣿⣿⣏⣹⡇⠘⣿⣿⠀⠀⠀⣾⡇⠀⢸⣇⣿⣿⣿⡀⠀⠈⣿⡇⠀⠀⠀
⠀⠀⠀⢀⣿⠇⠀⣿⣿⣿⣿⣇⠀⣿⡇⠀⠀⠙⠳⠶⠾⠋⠀⠀⠀⠀⠀⠙⠿⣿⣇⢻⣿⠛⠛⠻⣿⡇⠰⣿⡿⠀⠀⢠⣿⣿⣦⡀⣿⣿⣿⣿⡇⠀⠀⣿⣷⠀⠀⠀
⠀⠀⠀⣸⣿⠀⠀⣿⣿⣿⣿⣿⡄⢹⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠋⠀⠻⠷⠴⠾⠋⠀⠀⣸⡇⠀⠀⣾⣿⣿⡿⢿⣿⣿⣿⣿⡇⠀⠀⢹⣿⠀⠀⠀
⠀⠀⠀⣿⡇⣴⠀⣿⣿⣿⡏⠹⣿⣾⣿⣿⣧⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠃⢀⣾⣿⣿⣿⠁⠀⠀⣿⣿⣿⡇⠀⠀⢸⣿⠁⠀⠀
⠀⠀⢀⣿⠃⣿⢸⣿⣿⣿⡇⠀⠘⢿⣿⣿⣿⣿⡻⢶⣤⣀⡀⠀⠐⠶⠤⠴⠆⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⡏⣠⣿⣿⣿⡿⠃⠀⠀⠀⢻⣿⣿⡇⠀⠀⠈⣿⡇⠀⠀
⠀⠀⣸⣿⠀⣿⢸⣿⣿⣿⠀⠀⠀⠈⠻⠟⠻⣿⣿⣿⣿⣿⣿⣿⡷⢶⣶⣶⣦⣶⣶⣶⣶⣶⣿⠿⢟⣿⣿⣾⠟⠉⠉⠉⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⣿⣇⠀⠀
⠀⠀⣿⡇⠀⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠈⠛⠿⢿⣿⣟⡹⣷⣴⡿⣿⣅⣰⣿⠋⠙⣿⣄⠀⠸⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⢿⣿⠀⠀
⠀⢸⣿⠀⠀⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⠃⠈⢹⣷⣾⠋⠉⢷⡄⢶⣾⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⢸⣿⠀⠀
⠀⣾⡏⠀⠀⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⢠⠀⣼⢧⣿⠉⢉⠹⣿⣾⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠸⣿⡄⠀
⢠⣿⠇⠀⠀⢻⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⢸⢀⣿⠀⣿⠀⠀⠀⠈⢿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⣿⡇⠀
⢸⣿⠀⠀⠀⢸⣿⣿⣿⡇⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣫⡿⡆⢸⣿⡆⣿⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⠀⠀⠀⠀⣿⣷⠀
⢸⣿⡄⠀⠀⠈⣿⣿⣿⣧⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣻⡟⡹⠁⣼⡟⠃⣿⡀⢸⡄⠀⠘⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⢹⣿⡄
⢸⣿⣧⠀⠀⠀⢹⣿⣿⣿⠀⠀⠀⢸⣇⣈⣿⣿⣿⣿⣟⡘⠁⠀⣹⣷⣶⣟⠁⠀⢳⣀⣀⣘⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠃⠀⢰⠀⠀⠘⣿⡇
⢸⣿⣿⡄⠀⠀⠈⣿⣿⣿⠀⠀⠀⠀⠛⠛⠛⢉⣼⣿⣿⣿⣧⣴⣿⣿⣿⣿⣆⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣇⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠀⠀⣿⠀⠀⠀⣿⣧
⠘⣿⣿⣷⡀⠀⠀⠸⣿⣿⡆⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣾⡟⠀⠀⠀⠀⠀⠀⠀⣿⣿⠇⠀⢠⣿⠀⠀⠀⣿⣧
⠀⢻⣿⣿⣷⣄⠀⠀⢻⣿⣷⠀⠀⠀⠀⠀⠀⠀⠙⠿⣿⣿⣟⣻⣿⣿⣿⣿⣿⣿⣟⣻⣿⣿⣷⡿⠟⠁⠀⠉⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⡟⠀⠀⣾⣿⠀⠀⠀⣿⡏
⠀⠀⠹⣿⣿⣿⣷⣄⠀⢿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⢹⣯⣭⣿⣿⣿⣿⢻⣛⣉⣉⣁⣰⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⠁⠀⣼⣿⡏⠀⠀⣼⣿⠁
⠀⠀⠀⠘⢿⣿⣿⣿⣷⣾⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⠃⢀⣾⣿⣿⠃⢀⣼⣿⠋⠀
⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡿⢃⣴⣿⣿⣿⣟⣴⣿⡿⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠛⠿⠿⠃⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⠿⠿⠿⠟⠛⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠛⠿⠟⠛⠁⠀⢿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`,
    `
⠀⠀⠀⠀⣠⣴⣿⡿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠹⣿⣿⣾⣦⣻⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⣿⣿⣿⣿⣷⣦⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣶⣿⣿⡟⠇⠀⠉⠁⠉⠓⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡿⠈⢿⡟⠃⠀⠀⠀⠀⠀⠀⠀⣝⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⠁⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠘⠯⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⡟⡀⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠗⢽⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢧⠀⣧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⠀⠀⢀⣀⡤⢶⣷⠶⣤⣀⣀⠀⠀⠀⠀⠀⠀⠘⣇⢸⡄⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣯⡴⠚⠉⠀⠀⢸⠀⡀⠀⡋⠉⠉⠓⢶⣄⠀⠀⠀⠹⡆⡇⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣧⣄⠐⢠⣾⣄⣶⡀⢳⣦⣯⠀⠀⠀⠀⠙⣧⠀⠀⠀⢻⢻⠀⠀⠀⠀⠀⠀
⠀⠀⣿⡿⡟⡸⣼⢾⣿⡿⠁⢸⡟⢸⡄⠀⠠⠀⣀⣈⣧⡄⠀⠈⢻⠀⠀⠀⠀⠀⠀
⠀⢠⣿⠀⡇⠘⢿⡐⠉⠁⠀⠀⠆⠸⠇⠀⠀⡄⢻⡄⠋⣷⠀⠀⠸⡇⠀⠀⠀⠀⠀
⠀⠸⣿⣿⣿⣷⣦⠷⠄⠀⠀⠀⠃⢀⣶⣿⣷⣶⠤⠿⣿⡿⠀⠀⠀⡇⠀⠀⠀⠀⠀
⠀⠈⢿⣿⡿⠟⠻⡯⢀⣀⡀⠀⢸⣿⠿⢿⡿⠋⣀⣼⣿⠃⠀⠀⠀⣷⠀⠀⠀⠀⠀
⠀⠀⠈⢻⡏⣄⡀⢁⢀⣤⡄⣶⠏⠘⠀⠀⢤⣾⣿⡿⠋⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠈⣧⣽⣧⣈⢷⣿⣽⣿⣒⠐⣠⣾⠟⠛⠉⠀⠀⠀⠀⠀⠀⣿⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠘⢧⣉⣙⠿⣿⣿⣿⢿⠟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⢰⡟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⡏⡿⢀⠈⢙⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⠈⡇⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⢿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣿⠃⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⣼⡇⠀⠀⣠⣼⡀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣴⢿⣧⠀⢀⠀⠸⠇⠀⠀⠀⠀⠀⠀⢰⣿⠁⠀⠀⣧⣤⣿⠷⣦⣀⠀⠀
⠀⠀⣴⠟⣻⣿⣿⠀⢸⣇⡀⠀⠀⠀⠀⠀⢀⣴⡿⠃⠀⢀⣴⡿⢙⡃⢠⠀⠹⣷⡀
⢀⣼⣿⣼⡏⢸⣿⡆⣸⣿⡷⠀⠀⠀⢀⣴⠟⠋⠀⠀⣠⣾⣿⣷⡞⢷⣤⣲⣿⣿⡇
⠚⠛⠟⠁⠀⢸⣿⣧⣿⣿⣶⣤⣤⠞⠋⠁⠀⠀⣠⣾⣟⣿⡿⠋⠁⠘⠻⣿⡿⠟⠁
⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⡿⠟⠓⠒⠀⣈⣹⣿⣿⠏⠀⠀⠀⠀⠀⠈⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣰⡿⣿⣿⡿⢿⣷⣄⣀⣰⡿⠋⠀⢐⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣷⡶⢿⣿⡶⢾⣿⣿⣿⡇⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⡷⠶⡜⣿⣧⢀⠀⠀⠈⣿⡄⠀⠠⠖⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠚⠛⠒⠒⠓⠛⠋⠀⠀⠀⢠⣾⣳⣀⣀⣸⣼⡿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠉⡉⠉⠉⢀⣠⠀⠀⠀⠀⠀⠀⠀⠀
`,
    `
⠀⠀⣀⣤⠶⠶⠶⠶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⡾⠋⠀⠀⠀⠀⠀⠀⠈⠙⠳⢦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣾⠁⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠈⠛⢶⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠉⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⡶⣴⣤⣄⡀⠀⠀⠀⠀
⠈⠻⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⢦⡄⠀⠀⠀⠀⣠⡶⠛⠉⠀⠀⠀⠀⠀⠈⠙⢷⣄⠀⠀
⠀⠀⠈⠻⢦⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⠀⠀⠀⠙⢷⣄⢀⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡆⠀
⠀⠀⠀⠀⠀⠉⠛⠶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀
⠀⠀⠀⠀⠀⠀⢀⡤⠶⠿⣿⣦⠗⠛⠒⣦⣀⠀⠀⠀⠐⠀⠐⣿⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡄⡇⠀⢠⡇⠀
⠀⠀⠀⠀⠀⠀⣼⠀⠀⠀⠘⠇⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⢸⣇⠄⠀⠀⠀⠀⠀⠀⠀⣠⡿⠀⠀⠐⢸⡇⠀
⠀⠀⠀⠀⠀⠀⠹⣤⡀⢰⠞⠉⢳⡄⠠⣾⠁⠀⠀⠀⠀⠀⠀⠀⢛⢶⣤⣀⣀⣀⣤⡴⠟⠃⠀⠀⠀⠀⣿⠁⠀
⠀⠀⠀⠀⠀⠀⠠⡏⠀⠈⠓⡶⠊⠀⠀⠘⡷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠁⠀⠀⠀⠀⠀⠰⣸⠇⠀⠀
⠀⠀⠀⠀⠀⠀⢠⣧⣀⣀⣠⡾⢦⣤⣤⡴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣿⡀⠀⠀
⠀⠀⠀⠀⠀⢠⡿⠀⠈⠉⠁⠀⠀⠀⣀⣀⡀⢀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡄⠀
⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⡴⠒⠒⣞⣁⡠⠽⠭⢄⣈⣳⣊⡉⠲⣄⠤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⠀
⠀⠀⠀⠀⢸⡇⠀⡴⠋⢙⡵⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⠉⠉⠓⠳⢤⣀⣳⠤⢤⡀⠂⠀⠀⠀⠀⠀⠀⠐⢺⡇
⠀⠀⠀⠀⢸⡇⡮⢇⡾⠁⢠⣶⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠢⣄⢹⣄⡀⠀⠀⠀⠀⠀⠀⠈⡇
⠀⠀⠀⠀⠸⣿⡁⣼⠀⠀⣾⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣀⠀⠈⠳⣄⢹⠦⠀⠀⠀⠀⠀⠀⣟
⠀⠀⠀⠀⠀⠻⡟⢿⠀⠀⠈⠛⠉⠀⠀⠀⠀⣤⠤⣄⠀⠀⠀⠀⠀⣸⣿⣿⣧⠀⠀⠙⣎⠳⡆⠀⠀⠀⢸⢰⡏
⠀⠀⠀⠀⠀⠀⠱⣜⣆⡤⠦⠤⣄⠀⠀⠀⠀⠛⠒⠋⠀⠀⠀⠀⠀⢻⣿⣿⡏⠀⠀⠀⢸⣤⠇⢣⠀⢠⢄⡾⠁
⠀⠀⠀⠀⠀⠀⠀⣼⠋⠀⠀⠐⣾⠀⠀⠀⠀⠀⣤⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⢸⠃⡃⠁⠠⣠⡾⠁⠀
⠀⠀⠀⠀⠀⠀⠐⡇⠀⠀⠀⠀⣼⣦⣤⣠⠦⢄⠙⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢿⡞⣡⣤⠾⠋⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢷⠀⠀⠀⠸⣿⠉⠀⣹⣀⣙⣿⠏⠁⡽⠶⠤⣤⣤⣤⣤⣤⣴⡾⠅⠚⠛⠉⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠳⣤⣀⠀⠈⠛⣿⠿⣌⡝⠝⡍⣘⣧⣀⣀⣀⣀⣤⣴⣶⣾⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⣳⡶⢻⠷⣮⣤⣤⣽⣥⣬⣭⣿⣿⢿⡖⠋⠉⠉⢳⡝⢧⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⣠⢺⣥⣧⣽⢂⡄⠀⠓⠀⠈⢻⡄⠀⠀⠀⠀⣿⣭⣧⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣋⠴⢺⠥⠚⠁⠀⠘⠦⣽⡒⢤⣄⣀⣼⢳⣤⡀⠀⠼⠃⣠⣷⡗⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠯⠜⠉⡏⠀⠀⠀⠀⠀⡄⣧⠉⠙⠲⣾⣯⣯⣏⣳⣶⣴⣾⣻⣉⣽⣵⡦⡄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣰⠇⠀⠀⠸⠄⠀⠀⠀⠀⠀⠀⢿⠀⠀⠀⣿⢄⠀⠀⠀⠀⠀⠀⠀⠉⢉⣽⡶⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠟⢦⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠈⠀⠀⠀⢸⡀⠙⠒⠢⢴⣉⡦⠔⠚⠋⢸⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠦⠽⣉⣙⣟⠛⣛⠻⢿⠞⠿⡟⠿⣻⠛⣧⠀⠀⠀⠀⠁⠀⠀⠀⢀⡎⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣯⣉⣉⣻⣿⣃⠙⢍⣫⣁⠉⠉⠉⣉⣩⣿⠉⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣤⣉⣉⣿⡀⠉⠛⠛⠧⠜⠛⠛⠛⠉⢡⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠛⠛⠾⠶⠶⠶⠶⠞⠳⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`,
    `
⣿⣿⣿⣿⣿⠃⢀⡾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⣿⣿⢿⢏⣼⣷⢳⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⡿⠒
⣿⣿⣿⣿⠃⢀⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⣿⣿⢏⣾⣿⣿⡼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⠁⠄
⣿⣟⡫⠉⢠⣶⣤⡄⣉⠛⣿⢿⣿⣿⣿⣿⣿⣿⣿⡇⢹⢏⣾⢿⣛⠛⠃⠙⠯⢿⡯⣿⣿⣿⣿⣿⣿⠿⡄⠄
⣿⢿⡏⢠⣿⣿⣿⣧⣿⣷⣾⣾⣿⣿⣿⣿⣿⣿⣿⡇⢈⣎⣼⣷⣿⣿⣿⣎⣿⣷⣶⣥⣿⣿⣿⣿⣿⣷⣇⠄
⣿⡟⢠⣿⣿⣿⣿⣿⡜⣿⣿⣿⣿⣿⣿⠙⣿⣿⣿⡇⣾⣿⣿⣿⣿⣿⣿⣿⣌⠾⡿⣿⣿⣿⣿⣿⣿⣿⣯⠢
⣿⢁⣾⣿⣿⣿⣿⣿⣷⣹⣿⣿⣿⣿⣿⠄⠘⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣎⢓⣿⣿⣿⡏⠻⡿⣿⣷⣾
⡏⣼⣿⣿⣿⣿⣿⣿⣿⣷⡵⣿⣿⣿⣿⡇⠄⠘⢿⣺⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡻⣿⣿⣿⡄⠈⠙⢿⣿
⡰⣿⣿⠯⠍⠙⠛⠷⣯⣿⣿⣎⢿⣿⣿⡇⠄⠄⡈⢻⡟⣿⣿⢿⣿⠿⠿⣿⣿⣿⣿⣿⣎⢟⣿⣿⡄⠄⠄⠉
⢧⢧⠆⠄⠄⢀⣀⣀⠄⠙⢿⣿⣯⡿⣿⣷⠄⠄⣿⣦⡑⢴⠾⠛⠋⠁⠄⠄⠈⠙⠻⣿⣿⣷⢍⠻⣽⣂⠄⠄
⣟⠌⣴⣾⣶⣿⣿⣿⣿⣶⣾⣿⣿⣿⣮⡳⠆⠄⢹⣿⣿⡶⠋⣠⠄⢀⣠⣤⣄⣀⡀⠄⠙⣿⣸⣷⣮⣜⠳⠲
⡟⣿⡼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⣀⠘⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣶⣱⣿⣿⣿⣿⣿⣆
⠈⠑⡽⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡣⣻⣿⣿⣿⣿⣯⡟
⠄⠄⢻⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣵⣿⣿⣿⣿⣿⣿⣿⣿
⠄⠄⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠿⠿⠛⠻⢿⣿⣿⡿⢿⣿⣿⣿⣿⣿⣿⡿⣫⣞⢏⢋⣵⣾⣿⣿⣿⣿⣿
⠄⠄⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠄⣀⣠⣤⣤⣀⠈⠄⣿⣿⣿⣿⣿⣿⣭⣬⣷⣾⢏⢶⣿⣿⣿⣿⣿⣿⡿
⠄⠄⠄⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⡼⣿⣿⣿⣿⣿⣿⣆⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣼⣿⣿⣿⣿⣿⣿⠟⠄
⠄⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⣿⣿⣷⣽⣿⣿⣿⡿⣫⣾⣿⣿⣿⣿⣿⣿⣿⣿⠟⢁⣯⣽⣿⣿⣿⣿⠏⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠉⠻⢿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⣿⡿⣿⡫⠙⠄⠄⢸⣿⣿⣿⣿⣿⠋⠄⠄⢠
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⠻⠿⣿⣿⣿⡿⢿⣛⣿⣭⣾⣿⣿⡇⠂⠄⠄⢸⣿⣿⣿⣿⠃⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡀⠰⣶⣿⣿⣿⣿⣿⣿⣿⠿⠃⠄⢙⡄⡫⣿⣿⣿⠃⠄⠄⠄⠄⠄
⠄⢀⠄⣤⣤⣄⣀⠄⠄⠄⠄⠄⠄⠄⣾⠄⠄⣿⣿⣿⣿⣿⣿⠛⠁⠄⣠⡴⠛⠇⢹⣿⡯⠫⢀⣀⣀⣀⣀⣠
⣴⣿⣷⣿⣿⣿⣿⣿⠋⠄⠄⣰⡇⢰⡏⠄⢠⣿⣿⣿⡿⠋⠄⢀⣠⠞⠁⢀⠄⠄⢸⡿⣱⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠃⠄⠄⢠⣿⣁⣼⡇⠄⢸⣿⡿⠋⠄⢀⣤⠋⠄⣠⣾⡟⠄⠄⠸⣴⣿⣿⣿⣿⣿⣿⣿⣿
`,
];

const getRandomBanner = () => {
    const randomIndex = Math.floor(Math.random() * asciiArts.length);
    return asciiArts[randomIndex];
};

module.exports = { getRandomBanner };
