project(f100_manual)
file(GLOB_RECURSE site_sources "${CMAKE_CURRENT_SOURCE_DIR}/src/*.md")

LIST(APPEND site_sources "${CMAKE_CURRENT_SOURCE_DIR}/mkdocs.yml")

find_program(MKDOCS mkdocs DOC "manual generator")

set(site_output
    "${CMAKE_SOURCE_DIR}/mods/manual/index.html"
)

if (MKDOCS)
    add_custom_command(
        OUTPUT ${site_output}
        COMMAND ${MKDOCS} build
                --clean
                --site-dir "${CMAKE_SOURCE_DIR}/mods/manual"
        DEPENDS ${site_sources}
        COMMENT "Building mkdocs..."
        WORKING_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}
    )
    add_custom_target(build_manual_target DEPENDS ${site_output})
else()
    MESSAGE("[WARNING] - No MKDOCS found: Try py -m pip install mkdocs")
endif()