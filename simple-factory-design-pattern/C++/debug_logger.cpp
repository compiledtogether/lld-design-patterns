#include "debug_logger.hpp"
#include "common.hpp"

void DebugLogger::log(const string &msg){
    cout << "DEBUG: " << msg << endl;
}